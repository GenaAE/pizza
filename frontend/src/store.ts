import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adminSlice from './features/Admin/adminSlice';
import pelmeniSlice from './features/Catalog/Pelmeni/pelmeniSlice';
import productSlice from './features/Catalog/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    adminProduct: adminSlice,
    pelmeni: pelmeniSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
