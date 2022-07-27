import React from 'react';
import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import usePagination from './usePagination';

interface IProps {
  isLoading: boolean;
  totalPageCount: number;
  visibleProductCount: number;
  visibleGroupCount: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

const Pagination = ({
  isLoading,
  totalPageCount,
  visibleProductCount,
  visibleGroupCount,
  currentPage,
  setCurrentPage,
}: IProps) => {
  const {
    currentGroup,
    maxGroupCount,
    dots,
    onClickPrev,
    onClickNext
  } = usePagination({
    totalPageCount,
    visibleProductCount,
    visibleGroupCount,
    currentPage,
    setCurrentPage,
  });

  return (
    <Container>
      {
        dots.length > 0 && (
          <>
            <Button disabled={isLoading || currentGroup === 1} onClick={onClickPrev}>
              <VscChevronLeft />
            </Button>
            <PageWrapper>
              {
                dots
                  .slice((currentGroup - 1) * visibleGroupCount, currentGroup * visibleGroupCount)
                  .map((item) => (
                    <Page
                      key={`dots_${item}`}
                      selected={item === currentPage}
                      disabled={isLoading || item === currentPage}
                      onClick={() => setCurrentPage(item)}
                    >
                      {item}
                    </Page>
                  ))
              }
            </PageWrapper>
            <Button disabled={isLoading || currentGroup === maxGroupCount} onClick={onClickNext}>
              <VscChevronRight />
            </Button>
          </>
        )
      }
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
