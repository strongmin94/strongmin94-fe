import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProduct } from '../../../api/product';
import { defaultProduct, Product } from '../../../types/product';

const useProductsContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [error, setError] = useState<string>('');

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
