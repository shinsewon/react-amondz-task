import { useCallback, FocusEvent, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Form, Modal, Empty } from 'antd';
import { getProductItems, setProductItems, useResponsive } from 'hooks';
import { useMainState, useMainDispatch, actions } from 'context/main';
import { showConfirm } from 'utils';
import { DUMMY } from 'constants/common';
import {
  FlexComponent,
  SizedComponent,
  BorderComponent,
} from 'components/common';
import {
  ProductComponent,
  FloatButtonComponent,
  ModalComponent,
} from 'components';

function MainPage() {
  const [form] = Form.useForm();
  const localstorageItems: ProductItem[] | null = getProductItems();
  const { saveItem, isModalOpen } = useMainState();
  const dispatch = useMainDispatch();
  const { responseType, isDesktopSize } = useResponsive();
  const queryClient = useQueryClient();
  const now = new Date();
  const createdAt = now.getTime();

  useEffect(() => {
    if (localstorageItems?.length === 0 || localstorageItems === null) {
      setProductItems(DUMMY);
    }
  }, []);

  useEffect(() => {
    if (saveItem) {
      form.setFields([
        { name: 'id', value: saveItem.id },
        { name: 'type', value: saveItem.type },
        { name: 'name', value: saveItem.name },
        { name: 'imageUrl', value: saveItem.imageUrl },
        { name: 'price', value: saveItem.price },
        { name: 'sale', value: saveItem.sale },
        { name: 'description', value: saveItem.description },
      ]);
    }
  }, [saveItem]);

  const { data: keywordProductItems } = useQuery(
    ['productItems', localstorageItems],
    () => getProductItemByKeyword(localstorageItems),
  );

  const getProductItemByKeyword = (productItems: ProductItem[] | null) => {
    if (productItems === null) return [];

    const init: Record<string, ProductItem[]> = {};
    const newArr = productItems.reduce((acc, cur) => {
      const { type } = cur;
      acc[type] = acc[type] || [];
      acc[type].push(cur);
      return acc;
    }, init);
    return Object.keys(newArr).map((key) => ({
      type: key,
      value: newArr[key],
    }));
  };

  const showModal = useCallback(() => {
    dispatch(actions.MODAL_OPEN(true));
  }, []);

  const handleCancel = useCallback(() => {
    showConfirm({
      title: '기존 내용이 전부 삭제됩니다.',
      content: '정말로 취소하시겠습니까?',
      onOk: () => {
        dispatch(actions.MODAL_OPEN(false));
        dispatch(actions.MODIFY_STATE(null));
        form.resetFields();
      },
    });
  }, [form]);

  const onBlur = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>): void => {
      if (saveItem) {
        const newValue: ProductItem = { ...saveItem, imageUrl: e.target.value };
        dispatch(actions.MODIFY_STATE(newValue));
      } else {
        form.setFieldValue('imageUrl', e.target.value);
        dispatch(actions.MODIFY_STATE(null));
      }
    },
    [],
  );

  const onModify = useCallback(
    (values: ProductItem) => {
      const id = form.getFieldValue('id');
      const { name, description, imageUrl, type, price, sale } = values;
      const newProductItems = localstorageItems?.map((item) => {
        const temp = item;
        if (temp.id === id) {
          temp.description = description;
          temp.imageUrl = imageUrl;
          temp.name = name;
          temp.type = type;
          temp.price = price;
          temp.sale = sale;
        }
        return temp;
      }) as ProductItem[];
      setProductItems(newProductItems);
      Modal.success({
        title: '정상적으로 수정되었습니다.',
        centered: true,
        async onOk() {
          dispatch(actions.MODAL_OPEN(false));
          dispatch(actions.MODIFY_STATE(null));
          form.resetFields();
          await queryClient.invalidateQueries([
            'productItems',
            localstorageItems,
          ]);
        },
      });
    },
    [localstorageItems, form, queryClient],
  );

  const onFinish = useCallback(
    (values: ProductItem) => {
      let productItem: ProductItem[] = [];
      if (localstorageItems?.length) {
        productItem = [
          { ...values, id: createdAt, createdAt },
          ...localstorageItems,
        ];
      } else {
        productItem = [{ ...values, id: createdAt, createdAt }];
      }
      setProductItems(productItem);
      Modal.success({
        title: '정상적으로 등록되었습니다.',
        centered: true,
        async onOk() {
          dispatch(actions.MODAL_OPEN(false));
          form.resetFields();
          await queryClient.invalidateQueries([
            'productItems',
            localstorageItems,
          ]);
        },
      });
    },
    [localstorageItems, queryClient, form],
  );

  const onClickModifyBtn = useCallback((value: ProductItem) => {
    dispatch(actions.MODIFY_STATE(value));
    dispatch(actions.MODAL_OPEN(true));
  }, []);

  const onRemoveItem = useCallback(
    (value: ProductItem) => {
      showConfirm({
        title: '정말로 삭제 하시겠습니까?',
        async onOk() {
          const filterItems = localstorageItems?.filter(
            (item) => item.id !== value.id,
          ) as ProductItem[];
          setProductItems(filterItems);
          await queryClient.invalidateQueries([
            'productItems',
            localstorageItems,
          ]);
        },
      });
    },
    [localstorageItems, saveItem?.id, queryClient],
  );

  return (
    <div>
      <SizedComponent
        Col={responseType(6, 10, 10)}
        Gutter={responseType(5, 9, 9)}
        margin={[0]}
      >
        <FlexComponent
          flexDirection="column"
          flexSet={['center', 'center', 'center']}
          style={{ gap: 40, minHeight: '100vh' }}
          padding={[40, 0]}
        >
          {keywordProductItems?.length ? (
            <>
              {keywordProductItems?.map((products) => (
                <ProductComponent
                  key={+products.type}
                  products={products}
                  onRemoveItem={onRemoveItem}
                  onClickModifyBtn={onClickModifyBtn}
                />
              ))}
            </>
          ) : (
            <BorderComponent
              padding={[60, 0]}
              borderColor="#e3e3e3"
              borderRadius={4}
              style={{
                overflow: 'hidden',
              }}
            >
              <Empty description="내용이 없습니다." />
            </BorderComponent>
          )}
        </FlexComponent>
      </SizedComponent>

      <FloatButtonComponent onClick={showModal} isDesktopSize={isDesktopSize} />

      {isModalOpen ? (
        <ModalComponent
          form={form}
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          onBlur={onBlur}
          onFinish={onFinish}
          onModify={onModify}
        />
      ) : null}
    </div>
  );
}

export default MainPage;
