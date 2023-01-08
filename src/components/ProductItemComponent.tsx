import { useMemo } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { FlexComponent, TextComponent } from 'components/common';

export interface IProductItemProps {
  product: ProductItem;
  onRemoveItem: (value: ProductItem) => void;
  onClickModifyBtn: (value: ProductItem) => void;
}

function ProductItemComponent({
  product,
  onRemoveItem,
  onClickModifyBtn,
}: IProductItemProps) {
  const imageUrl = product.imageUrl.split('?')[0];
  const isSale = +product.sale !== 0;
  const showPrice = (originPrice: number, rate: number): number => {
    const savePrice = originPrice * (rate / 100);
    const resultPrice = originPrice - savePrice;
    return Math.floor(resultPrice / 10) * 10;
  };

  const memoPrice = useMemo(
    () => showPrice(+product.price, +product.sale),
    [product.price, product.sale],
  );

  function getParametersForUnsplash({
    width,
    height,
    quality,
    format,
  }: {
    width: number;
    height: number;
    quality: number;
    format: string;
  }) {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
  }

  return (
    <FlexComponent flexDirection="column" style={{ minHeight: 300, gap: 5 }}>
      <Item>
        <img
          loading="lazy"
          decoding="async"
          alt={product.imageUrl}
          src={
            imageUrl +
            getParametersForUnsplash({
              width: 200,
              height: 200,
              quality: 80,
              format: 'jpg',
            })
          }
          // onError={handleImgError}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Item>

      <FlexComponent flexSet={['space-between', 'flex-start', 'flex-start']}>
        <FlexComponent flexDirection="column" style={{ gap: 5 }}>
          <TextComponent fontSize={13} fontWeight="bold">
            {product.name}
          </TextComponent>
          <TextComponent fontSize={13}>{product.description}</TextComponent>
        </FlexComponent>
        <FlexComponent
          flexSet={['flex-end', 'center', 'center']}
          style={{ gap: 10, margin: 0 }}
        >
          <Button onClick={() => onClickModifyBtn(product)}>수정</Button>
          <Button type="primary" danger onClick={() => onRemoveItem(product)}>
            제거
          </Button>
        </FlexComponent>
      </FlexComponent>

      <TextComponent
        fontSize={16}
        fontWeight="bold"
        style={{ letterSpacing: '-1px' }}
      >
        {isSale && <span style={{ color: '#6200f0' }}>{product.sale}%</span>}{' '}
        {memoPrice.toLocaleString()} <span style={{ fontSize: 12 }}>원</span>
      </TextComponent>
    </FlexComponent>
  );
}

export default ProductItemComponent;

const Item = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
