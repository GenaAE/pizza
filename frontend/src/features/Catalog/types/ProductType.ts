export type Product = {
  id: number;
  path: string;
  product_category: string;
  product_name: string;
  composition: string;
  image: string;
  price: number;
  weight: number | string;
  count: number; // удалить с базы
  score: number; // удалить с базы
  forBasket: number; // удалить с базы
  onlyValuesOfDishues: number | unknown;
  children?: JSX.Element | JSX.Element[];
};
