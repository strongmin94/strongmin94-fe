import styled from 'styled-components';
import LazyImage from '../../../components/lazyImage';
import { Product } from '../../../types/product';

interface IProps {
  product: Product;
}

const ProductInfo = ({ product }: IProps) => {
  return (
    <>
      <ThumbnailWrapper>
        <LazyImage
          src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'}
          alt={product.name}
        />
      </ThumbnailWrapper>
      <InfomationWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price.toLocaleString()}원</Price>
      </InfomationWrapper>
    </>
  );
};

export default ProductInfo;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 420px;
`;

const InfomationWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
`;

const Price = styled.p`
  font-size: 18px;
  line-height: 18px;
  margin-top: 8px;
`;
