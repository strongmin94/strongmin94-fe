import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useDebounce({
    callback: () => {
      setScrollTop(0);
    },
    interval: 100,
  });

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollTop,
  };
};

export default useScrollTop;
