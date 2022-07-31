import { useCallback, useEffect, useRef, useState } from 'react';
import { getProducts } from '../../../api/product';
import { Product } from '../../../types/product';

const VISIBLE_PRODUCTS_SIZE = 16;

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
        data: { products: newProducts, totalCount },
      } = await getProducts({ page: currentPage.current, size: VISIBLE_PRODUCTS_SIZE });
      const updateProducts = [...products, ...newProducts];
      isHasMore.current = updateProducts.length < totalCount;
      setProducts(updateProducts);
    } catch (ex) {
      console.log(ex);
    }
  }, [products]);

  return {
    isLoading,
    products,
    isHasMore: isHasMore.current,
    fetchData,
  };
};

export default useInfiniteScrollContainer;
