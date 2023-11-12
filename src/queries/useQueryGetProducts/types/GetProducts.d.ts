export type ProductsProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type ResponseGetProducts = {
  products: ProductsProps[];
  count: number;
};

export type CartProductsProps = {
  product: ProductsProps;
  quantity: number;
};
