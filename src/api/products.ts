import axiosInstance from "../axios";
import { IProductResponse } from "../types/product";

interface IPaginationOption {
  page?: number;
  size?: number;
}

export const getProducts = async ({ page = 1, size = 10 }: IPaginationOption) => {
  const response = await axiosInstance.get('/products', {
    params: {
      page,
      size,
    }
  });

  return response.data as IProductResponse;
}