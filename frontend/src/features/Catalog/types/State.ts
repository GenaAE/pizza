import { Product } from './ProductType';

type State = {
  products: [] | Product[];
  error: undefined | string;
};

export default State;
