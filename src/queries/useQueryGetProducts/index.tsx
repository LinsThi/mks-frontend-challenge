import { useQuery } from "react-query";

import { mksAPI } from "../../services/api";
import { AxiosResponse } from "axios";

import {} from "./index";
import { ResponseGetProducts } from "./types/GetProducts";

async function getProducts() {
  const params = {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  };

  const apiResponse: AxiosResponse<ResponseGetProducts> = await mksAPI.get(
    "/products",
    {
      params,
    }
  );

  const { products } = apiResponse.data;

  return products;
}

export function useQueryGetProducts() {
  return useQuery({
    queryKey: "get_products",
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });
}
