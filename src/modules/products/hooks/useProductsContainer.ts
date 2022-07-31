import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProduct } from '../../../api/product';
import { updateIsBack } from '../../../redux/infiniteScrollCacheSlice';
import { useAppDispatch } from '../../../redux/store';
import { defaultProduct, Product } from '../../../types/product';

const useProductsContainer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      dispatch(updateIsBack(true));
    };

    addEventListener('popstate', handlePopState);
    return () => removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const initialize = async () => {
        const { id } = router.query;
        if (typeof id === 'string') {
          setIsLoading(true);
          try {
            const {
              data: { product },
            } = await getProduct(id);
            setProduct(product);
          } catch (ex: any) {
            setError(ex?.code);
          } finally {
            setIsLoading(false);
          }
        }
      };

      initialize();
    }
  }, [router.isReady]);

  return {
    isLoading,
    product,
    error,
  };
};

export default useProductsContainer;
