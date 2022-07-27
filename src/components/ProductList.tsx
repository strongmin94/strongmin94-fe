import { useRef } from 'react';
import styled from 'styled-components';
import { Product } from '../types/product';
import ProductItem from './ProductItem';
import ProductLoadingItem from './productLoadingItem';

interface IProps {
  isLoading: boolean;
  products: Array<Product>;
};

const ProductList = ({ isLoading, products }: IProps) => {
  const loadingData = useRef<Array<object>>(new Array(10).fill({})).current;

  return (
    <Container>
      {
        isLoading
          ? loadingData.map((_, idx) => (
            <ProductLoadingItem key={`loading_item${idx}`} />
          ))
          : products.map((item) => (
            <ProductItem key={`product_${item.id}`} product={item} />
          ))
      }
    </Container>
  );
};

export default ProductList;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
