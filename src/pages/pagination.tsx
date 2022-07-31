import type { NextPage } from 'next';
import React from 'react';

import Header from '../layouts/header';
import PaginationContainer from '../modules/pagination/container/paginationContainer';

const PaginationPage: NextPage = () => {
  return (
    <>
      <Header />
      <PaginationContainer />
    </>
  );
};

export default PaginationPage;
