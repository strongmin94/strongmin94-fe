import { useState } from 'react';
import styled from 'styled-components';
import useIsElementInViewport from '../hooks/useIsElementInViewport';
import useIsMounted from '../hooks/useIsMounted';
import useUpdateEffect from '../hooks/useUpdateEffect';

interface IProps {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMounted = useIsMounted();
  const { elementRef, isInViewport } = useIsElementInViewport();

  useUpdateEffect(() => {
    if (isInViewport) {
      const image = new Image();
      image.onload = () => {
        if (isMounted()) {
          setIsLoading(false);
        }
      };
      image.src = src;
    }
  }, [isInViewport]);

  return (
    <StyleContainer ref={elementRef}>
      {isLoading ? <StyleLoading /> : <StyleImage src={src} alt={alt} />}
    </StyleContainer>
  );
};

export default LazyImage;

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyleImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyleLoading = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
