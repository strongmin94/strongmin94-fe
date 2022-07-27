import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../layouts/header';

const InfiniteScrollPage: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <ProductList isLoading={false} products={products} /> */}
      </Container>
    </>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
