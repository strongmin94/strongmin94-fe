import { useEffect, useRef, useState } from 'react';

const useIsElementInViewport = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);
    elementRef.current && observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return { elementRef, isInViewport };
};

export default useIsElementInViewport;
