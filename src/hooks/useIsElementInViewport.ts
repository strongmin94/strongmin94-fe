import { useCallback, useEffect, useRef, useState } from 'react';

const useIsElementInViewport = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);
    elementRef.current && observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const unobserve = useCallback(() => {
    if (observerRef.current && elementRef.current) {
      observerRef.current.unobserve(elementRef.current);
    }
  }, []);

  return { elementRef, isInViewport, unobserve };
};

export default useIsElementInViewport;
