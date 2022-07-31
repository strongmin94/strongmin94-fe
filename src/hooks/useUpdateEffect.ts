import { DependencyList, EffectCallback, useEffect } from 'react';
import useFirstMountState from './useFirstMountState';

// Run an effect only on updates.
const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const isFirstMount = useFirstMountState();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
