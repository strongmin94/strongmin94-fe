import { useCallback, useRef } from 'react';

interface IProps {
  callback: () => void;
  interval: number;
}

const useDebounce = ({ callback, interval }: IProps) => {
  const timer = useRef<NodeJS.Timeout>();

  const debounce = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
    }, interval);
  }, []);

  return debounce;
};

export default useDebounce;
