import { useCallback, useEffect, useRef, useState } from 'react';
import { getProducts } from '../../../api/products';
import { Product } from '../../../types/product';

const useInfiniteScrollContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Array<Product>>([]);
  const currentPage = useRef<number>(0);
  const isHasMore = useRef<boolean>(false);

  useEffect(() => {
    const initialize = async () => {
      await fetchData();
      setIsLoading(false);
    };
    initialize();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      currentPage.current++;
      const {
        data: { products, totalCount },
      } = await getProducts({ page: currentPage.current });
      setProducts((prevState) => [...prevState, ...products]);
    } catch (ex) {
      console.log(ex);
    }
  }, [products]);

  return {
    isLoading,
    products,
    fetchData,
  };
};

export default useInfiniteScrollContainer;
