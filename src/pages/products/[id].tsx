import type { NextPage } from 'next';
import Header from '../../layouts/header';
import ProductsContainer from '../../modules/products/container/productsContainer';

const ProductDetailPage: NextPage = () => {
  return (
    <>
      <Header />
      <ProductsContainer />
    </>
  );
};

export default ProductDetailPage;
