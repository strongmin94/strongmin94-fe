import { useCallback, useEffect, useRef, useState } from 'react';
import { getProducts } from '../../../api/product';
import useScrollTop from '../../../hooks/useScrollTop';
import useUpdateEffect from '../../../hooks/useUpdateEffect';
import { updateInfiniteScrollCache } from '../../../redux/infiniteScrollCacheSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Product } from '../../../types/product';

const VISIBLE_PRODUCTS_SIZE = 16;

const useInfiniteScrollContainer = () => {
  const dispatch = useAppDispatch();
  const { infiniteScrollCache } = useAppSelector((state) => state);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const totalCount = useRef<number>(0);
  const currentPage = useRef<number>(0);
  const isHasMore = useRef<boolean>(false);
  const { scrollTop } = useScrollTop();

  useEffect(() => {
    if (infiniteScrollCache.isBack && infiniteScrollCache.data.length !== 0) {
      setProducts(infiniteScrollCache.data);
      totalCount.current = infiniteScrollCache.totalCount;
      currentPage.current = infiniteScrollCache.currentPage;
      isHasMore.current = infiniteScrollCache.data.length < totalCount.current;
      setIsLoading(false);
      setTimeout(() => document.documentElement.scrollTo({ top: infiniteScrollCache.scrollTop }));
    } else {
      const initialize = async () => {
        await fetchData();
        setIsLoading(false);
      };
      initialize();
    }
  }, []);

  useUpdateEffect(() => {
    dispatch(
      updateInfiniteScrollCache({
        isBack: false,
        data: products,
        scrollTop,
        currentPage: currentPage.current,
        totalCount: totalCount.current,
      })
    );
  }, [scrollTop]);

  const fetchData = useCallback(async () => {
    try {
      currentPage.current++;
      const {
        data: { products: newProducts, totalCount: totalProductsCount },
      } = await getProducts({ page: currentPage.current, size: VISIBLE_PRODUCTS_SIZE });
      const updateProducts = [...products, ...newProducts];
      totalCount.current = totalProductsCount;
      isHasMore.current = updateProducts.length < totalCount.current;
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
