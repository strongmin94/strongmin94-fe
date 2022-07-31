import styled from 'styled-components';
import { convertErrorCode } from '../data/convertErrorCode';
import useProductsContainer from '../hooks/useProductsContainer';
import ProductInfo from '../presenter/productInfo';
import ProductLoadingInfo from '../presenter/productLoadingInfo';

const ProductsContainer = () => {
  const { isLoading, product, error } = useProductsContainer();

  return (
    <Container>
      {error ? (
        <ErrorInfo>{convertErrorCode(error)}</ErrorInfo>
      ) : isLoading ? (
        <ProductLoadingInfo />
      ) : (
        <ProductInfo product={product} />
      )}
    </Container>
  );
};

export default ProductsContainer;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ErrorInfo = styled.p`
  margin: auto;
`;
