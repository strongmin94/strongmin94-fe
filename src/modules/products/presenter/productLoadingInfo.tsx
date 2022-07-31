import styled from 'styled-components';

const ProductLoadingInfo = () => {
  return (
    <>
      <ThumbnailWrapper />
      <InfomationWrapper>
        <Name />
        <Price />
      </InfomationWrapper>
    </>
  );
};

export default ProductLoadingInfo;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 420px;
  background-color: gray;
`;

const InfomationWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.p`
  width: 80%;
  height: 20px;
  background-color: gray;
`;

const Price = styled.p`
  width: 30%;
  height: 16px;
  background-color: gray;
  margin-top: 8px;
`;
