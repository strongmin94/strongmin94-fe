import styled from "styled-components";
import Pagination from "../../../components/pagination/Pagination";
import ProductList from "../../../components/ProductList";
import { convertErrorCode } from "../data/convertErrorCode";
import usePaginationContainer from "../hooks/usePaginationContainer";

const PaginationContainer = () => {
  const {
    isLoading,
    products,
    totalPageCount,
    error,
    visibleProductCount,
    currentPage,
    setCurrentPage,
  } = usePaginationContainer();

  return (
    <Container>
      {
        error
          ? <ErrorInfo>
            {convertErrorCode(error)}
          </ErrorInfo>
          : (
            <>
              <ProductList isLoading={isLoading} products={products} />
              {
                currentPage && (
                  <Pagination
                    isLoading={isLoading}
                    totalPageCount={totalPageCount}
                    visibleProductCount={visibleProductCount}
                    visibleGroupCount={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                ) 
              }
            </>
          )
    }
    </Container>
  )
}

export default PaginationContainer;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  flex: 1;
`;

const ErrorInfo = styled.p`
  margin: auto;
`