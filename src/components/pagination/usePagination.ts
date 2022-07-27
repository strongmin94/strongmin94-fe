import { useCallback, useMemo, useState } from "react";

interface IProps {
  totalPageCount: number;
  visibleProductCount: number;
  visibleGroupCount: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

const usePagination = ({
  totalPageCount,
  visibleProductCount,
  visibleGroupCount,
  currentPage,
  setCurrentPage
}: IProps) => {
  const currentGroup = useMemo<number>(() => {
    return Math.ceil(currentPage / visibleGroupCount);
  }, [currentPage]);
  const maxDotsCount = useMemo<number>(() => {
    return Math.ceil(totalPageCount / visibleProductCount);
  }, [totalPageCount]);
  const maxGroupCount = useMemo<number>(() => {
    return Math.ceil(maxDotsCount / visibleGroupCount);
  }, [maxDotsCount]);
  const dots = useMemo<Array<number>>(() => {
    const result: Array<number> = [];
    for (let i = 0; i < maxDotsCount; i++) {
      result.push(i + 1);
    }
    return result;
  }, [maxDotsCount]);

  const onClickPrev = useCallback(() => {
    const movePage = (currentGroup - 1) * visibleGroupCount;
    setCurrentPage(movePage);
  }, [currentGroup]);

  const onClickNext = useCallback(() => {
    const movePage = currentGroup * visibleGroupCount + 1;
    setCurrentPage(movePage);
  }, [currentGroup]);

  return {
    currentGroup,
    maxGroupCount,
    dots,
    onClickPrev,
    onClickNext,
  };
}

export default usePagination;