import axiosInstance from '../axios';
import { IProductResponse, IProductsResponse } from '../types/product';

interface IPaginationOption {
  page?: number;
  size?: number;
}

export const getProduct = async (productId: string) => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data as IProductResponse;
};

export const getProducts = async ({ page = 1, size = 10 }: IPaginationOption) => {
  const response = await axiosInstance.get('/products', {
    params: {
      page,
      size,
    },
  });

  return response.data as IProductsResponse;
};
