export type Product = {
  id: string;
  name: string;
  thumbnail: string | null;
  price: number;
}

export interface IProductResponse {
  data: {
    products: Array<Product>;
    totalCount: number;
  }
}
