import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getProducts } from "../../../api/products";
import { Product } from "../../../types/product";

const usePaginationContainer = () => {
  const router = useRouter();
  const { query: { page }, isReady } = router;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const visibleProductCount = useRef<number>(10).current;
  const currentPage = useMemo<number | undefined>(() => {
    if (isReady) {
      if (typeof page === "string") {
        const pageNumber = parseInt(page);
        if (!isNaN(pageNumber)) {
          return pageNumber;
        }
      }

      return 1;
    }
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentPage) {
        try {
          setError('');
          setIsLoading(true);
          const { data: { products, totalCount } } = await getProducts({ page: currentPage, size: visibleProductCount });
          setProducts(products);
          setTotalPageCount(totalCount);
        } catch (ex: any) {
          // alert(ex?.code);
          setError(ex?.code);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchData();
  }, [currentPage]);

  const setCurrentPage = useCallback((pageNumber: number) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: pageNumber }
    });
  }, []);

  return {
    isLoading,
    products,
    totalPageCount,
    error,
    visibleProductCount,
    currentPage,
    setCurrentPage,
  }  
};

export default usePaginationContainer;