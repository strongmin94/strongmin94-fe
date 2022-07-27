import { memo } from 'react';
import styled from 'styled-components';

const ProductLoadingItem = () => {
  return (
    <Container>
      <Thumbnail />
      <Name />
      <Price />
    </Container>
  );
}

export default memo(ProductLoadingItem);

const Container = styled.li`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
  background-color: gray;
`;

const Name = styled.div`
  margin-top: 8px;
  width: 80%;
  height: 16px;
  background-color: gray;
`;

const Price = styled.div`
  margin-top: 4px;
  width: 30%;
  height: 16px;
  background-color: gray;
`;
