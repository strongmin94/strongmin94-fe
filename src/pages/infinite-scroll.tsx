import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../layouts/header';
import InfiniteScrollContainer from '../modules/infiniteScroll/container/infiniteScrollContainer';

const InfiniteScrollPage: NextPage = () => {
  return (
    <>
      <Header />
      <InfiniteScrollContainer />
    </>
  );
};

export default InfiniteScrollPage;
