import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import useIsElementInViewport from '../hooks/useIsElementInViewport';
import useUpdateEffect from '../hooks/useUpdateEffect';
import Loader from './loader';

interface IProps {
  isHasMore: boolean;
  onFetch: () => Promise<void>;
  children: ReactNode;
}

const InfiniteScroll = ({ isHasMore, onFetch, children }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { elementRef, isInViewport, unobserve } = useIsElementInViewport();

  useUpdateEffect(() => {
    if (isInViewport) {
      const fetchData = async () => {
        if (isHasMore) {
          setIsLoading(true);
          await onFetch();
          setIsLoading(false);
        } else {
          unobserve();
        }
      };

      fetchData();
    }
  }, [isInViewport]);

  return (
    <Container>
      {children}
      <Observer ref={elementRef} />
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Container>
  );
};

export default InfiniteScroll;

const Container = styled.div``;

const Observer = styled.div``;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;
