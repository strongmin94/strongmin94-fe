import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const observerRef = useRef<IntersectionObserver>();

  const observer = useCallback((node: HTMLDivElement) => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const image = new Image();
        image.onload = () => {
          setIsLoading(false);
        };
        image.src = src;
      }
    });

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return (
    <StyleContainer ref={observer}>
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