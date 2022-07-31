import { useRef } from 'react';

// check if current render is first.
const useFirstMountState = (): boolean => {
  const isFirst = useRef<boolean>(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
};

export default useFirstMountState;
