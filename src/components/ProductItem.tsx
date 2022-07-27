import Link from 'next/link';
import { memo } from 'react';
import styled from 'styled-components';

import { Product } from '../types/product';
import LazyImage from './lazyImage';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product: { id, name, thumbnail, price } }: ProductItemProps) => (
  <Container>
    <Link href={`/products/${id}`} passHref>
      <a>
        <Thumbnail>
          <LazyImage src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'} alt={name} />
        </Thumbnail>
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}</Price>
      </a>
    </Link>
  </Container>
);

export default memo(ProductItem);

const Container = styled.li`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
  line-height: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
  line-height: 16px;
`;
