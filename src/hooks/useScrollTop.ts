import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = useDebounce({
    callback: () => {
      setScrollTop(document.documentElement.scrollTop);
    },
    interval: 100,
  });

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollTop,
  };
};

export default useScrollTop;
