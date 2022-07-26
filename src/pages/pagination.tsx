import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import React from 'react';

import Header from '../layouts/header';
import PaginationContainer from '../modules/pagination/container/paginationContainer';

const PaginationPage: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      {/* <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        <Link href='/login'>
          <p>login</p>
        </Link>
      </Header>
      <Container>
        <ProductList products={products.slice(0, 10)} />
        <Pagination />
      </Container> */}
      <Header />
      <PaginationContainer />
    </>
  );
};

export default PaginationPage;
