import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import useIsElementInViewport from '../hooks/useIsElementInViewport';
import useUpdateEffect from '../hooks/useUpdateEffect';

interface IProps {
  // isHasMore: boolean;
  onFetch: () => Promise<void>;
  children: ReactNode;
}

const InfiniteScroll = ({ onFetch, children }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { elementRef, isInViewport } = useIsElementInViewport();

  useUpdateEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await onFetch();
      setIsLoading(false);
    };
    fetchData();
  }, [isInViewport]);

  return (
    <Container>
      {children}
      <Observer ref={elementRef} />
    </Container>
  );
};

export default InfiniteScroll;

const Container = styled.div``;

const Observer = styled.div``;
