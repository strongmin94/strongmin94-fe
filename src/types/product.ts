export type Product = {
  id: string;
  name: string;
  thumbnail: string | null;
  price: number;
};

export const defaultProduct: Product = {
  id: '',
  name: '',
  thumbnail: '',
  price: 0,
};

export interface IProductResponse {
  data: {
    product: Product;
  };
}

export interface IProductsResponse {
  data: {
    products: Array<Product>;
    totalCount: number;
  };
}
