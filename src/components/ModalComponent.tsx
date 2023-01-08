import React, { FocusEvent } from 'react';
import { Modal, Form, Input, Button, Image, FormInstance, Select } from 'antd';
import { useFormValidation } from 'hooks';
import { FALLBACK } from 'constants/common';
import { useMainState } from 'context/main';
import { FlexComponent, TextComponent } from 'components/common';

const { TextArea } = Input;
const { Option } = Select;

type ModalType = {
  form: FormInstance<any>;
  isModalOpen: boolean;
  handleCancel: () => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onFinish: (values: ProductItem) => void;
  onModify: (values: ProductItem) => void;
};

function ModalComponent({
  form,
  isModalOpen,
  handleCancel,
  onBlur,
  onFinish,
  onModify,
}: ModalType) {
  const { handleValidateNoEmpty, handleValidateOnlyNumber } =
    useFormValidation();
  const { saveItem } = useMainState();
  const imageUrl = saveItem?.imageUrl ?? form.getFieldValue('imageUrl');

  return (
    <Modal
      forceRender
      centered
      title="상품 추가"
      footer={null}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <FlexComponent
        flexDirection="column"
        flexSet={['center', 'center', 'center']}
        style={{ gap: 10 }}
      >
        <FlexComponent style={{ width: 'auto', position: 'relative' }}>
          <Image
            preview={false}
            width={200}
            height={200}
            src={imageUrl ?? FALLBACK}
          />
        </FlexComponent>
        <TextComponent fontWeight="bold">이미지 미리보기</TextComponent>
      </FlexComponent>
      <Form
        form={form}
        layout="vertical"
        style={{ margin: '20px 0' }}
        onFinish={saveItem ? onModify : onFinish}
      >
        <Form.Item
          name="type"
          label="상품 이미지 URL"
          rules={[{ required: true, message: '분류를 선택해주세요.' }]}
        >
          <Select
            size="large"
            dropdownStyle={{ textAlign: 'center' }}
            style={{ textAlign: 'center' }}
            placeholder="상품 분류"
          >
            <Option value={1}>HOT</Option>
            <Option value={2}>SALE</Option>
            <Option value={3}>BEST</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="상품 이미지 URL"
          rules={[
            { required: true, message: '' },
            { validator: handleValidateNoEmpty },
          ]}
        >
          <Input size="large" placeholder="이미지 주소" onBlur={onBlur} />
        </Form.Item>
        <Form.Item
          name="name"
          label="상품 이름"
          rules={[{ required: true, message: '상품 이름은 필수입니다.' }]}
        >
          <Input size="large" placeholder="이름" />
        </Form.Item>

        <Form.Item
          name="price"
          label="상품 가격"
          rules={[
            { required: true, message: '' },
            { validator: handleValidateOnlyNumber },
          ]}
        >
          <Input size="large" placeholder="가격" />
        </Form.Item>
        <Form.Item
          name="sale"
          label="상품 할인율"
          rules={[
            { required: true, message: '' },
            { validator: handleValidateOnlyNumber },
          ]}
        >
          <Input size="large" placeholder="할인율" />
        </Form.Item>
        <Form.Item
          name="description"
          label="상품 내용"
          rules={[{ required: true, message: '상품 내용은 필수입니다.' }]}
        >
          <TextArea
            size="large"
            placeholder="상품내용"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            style={{ width: '100%' }}
          >
            {saveItem ? '수정' : '등록'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalComponent;
