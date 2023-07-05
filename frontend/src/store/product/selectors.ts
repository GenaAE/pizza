import { Product } from '../../features/Catalog/types/ProductType';
import { RootState } from '../store';

export const productSelector = (state: RootState): Product[] =>
  state.products.products;
// export const getCatagoty =
export const selectedDish = (state: RootState): Product[] =>
  state.products.basketDish;
