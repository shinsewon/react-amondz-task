import styled from 'styled-components';
import Slider from 'react-slick';
import { FlexComponent, TextComponent } from 'components/common';
import { IProductItemProps } from 'components/ProductItemComponent';
import { ProductItemComponent } from 'components';

const NextArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  top: 40%;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const PrevArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 40%;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface IProductProps extends IProductItemProps {
  key: number;
  products: TypeFilterProductItems;
}

function ProductComponent({
  products,
  onRemoveItem,
  onClickModifyBtn,
}: Omit<IProductProps, 'product'>) {
  const productList = products.value;
  const { type } = products;

  const title: Record<string, string> = {
    '1': 'HOT',
    '2': 'SALE',
    '3': 'BEST',
  };

  return (
    <FlexComponent
      flexDirection="column"
      flexSet={['center', 'center', 'center']}
      style={{ gap: 20 }}
    >
      <TextComponent fontSize={26} fontWeight="bold">
        {title[type]}
      </TextComponent>
      <CustomSlider {...settings}>
        {productList?.map((product) => (
          <ProductItemComponent
            key={+product.id}
            product={product}
            onRemoveItem={onRemoveItem}
            onClickModifyBtn={onClickModifyBtn}
          />
        ))}
      </CustomSlider>
    </FlexComponent>
  );
}

export default ProductComponent;

const CustomSlider = styled(Slider)`
  width: 100%;

  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 1;
    color: #000;
  }
  .slick-slide div {
    cursor: pointer;
    margin-right: 10px;
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0;
  }
`;
