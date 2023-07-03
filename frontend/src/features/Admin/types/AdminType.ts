export type AdminType = {
  id: number;
  path: string;
  product_category: string;
  product_name: string;
  composition: string;
  image: string;
  price: number | string;
  weight: number | string;
};
export type AddProduct = {
  id: number;
  path: string;
  product_category: string;
  product_name: string;
  composition: string;
  image: string;
  price: number | string;
  weight: number | string;
};

export type DeleteProduct = {
  id: number;
};
