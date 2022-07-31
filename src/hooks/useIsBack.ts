import { useEffect } from 'react';

const useIsBack = () => {
  useEffect(() => {
    const handlePopstate = () => {};

    addEventListener('popstate', handlePopstate);
    return () => removeEventListener('popstate', handlePopstate);
  }, []);
};

export default useIsBack;
