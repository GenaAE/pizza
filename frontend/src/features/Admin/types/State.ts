import { AdminType } from './AdminType';

type State = {
  adminProduct: [] | AdminType[];
  error: undefined | string;
  message: undefined | string;
};

export default State;
