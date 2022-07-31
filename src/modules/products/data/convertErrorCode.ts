export const convertErrorCode = (code: string): string => {
  switch (code) {
    case 'ERR_BAD_REQUEST':
    default:
      return '존재하지 않는 상품입니다.';
  }
};
