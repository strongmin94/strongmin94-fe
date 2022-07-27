import styled from 'styled-components';
import InfiniteScroll from '../../../components/infiniteScroll';
import ProductList from '../../../components/ProductList';
import useInfiniteScrollContainer from '../hooks/useInfiniteScrollContainer';

const InfiniteScrollContainer = () => {
  const { isLoading, products, fetchData } = useInfiniteScrollContainer();

  return (
    <Container>
      {isLoading ? (
        <ProductList isLoading={isLoading} products={products} />
      ) : (
        <InfiniteScroll onFetch={fetchData}>
          <ProductList isLoading={isLoading} products={products} />
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default InfiniteScrollContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
