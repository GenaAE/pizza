import { Product } from './ProductType';

type State = {
  products: [] | Product[];
  error: undefined | string;
  check: number | string;
  // checkBas: number | string;

  // score: number | string;
  basketDish: [] | Product[];
};

export default State;
