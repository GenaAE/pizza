/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as adminApi from './adminApi';
import { AdminType, AddProduct, DeleteProduct } from './types/AdminType';
import { Product } from '../Catalog/types/ProductType';

const initialState: State = {
  adminProduct: [],
  error: undefined,
  message: undefined,
};

export const getProductsAdmin = createAsyncThunk(
  'admin/getProductsAdmin',
  async () => {
    const allProducts = await adminApi.getProductsAdmin();
    return allProducts;
  }
);
export const addProduct = createAsyncThunk(
  'admin/addProduct',
  async (adminAdd: FormData) => {
    const newProduct = await adminApi.addProduct(adminAdd);
    console.log(newProduct);
    return newProduct;
  }
);
export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (prodDel: number) => {
    console.log(prodDel);
    const del = await adminApi.deleteProduct(prodDel);
    console.log(del);
    return del;
  }
  // (prodDel: AdminType) => adminApi.deleteProduct(prodDel)
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearFormMessage: (state) => {
      state.message = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAdmin.fulfilled, (state, action) => {
        state.adminProduct = action.payload;
      })
      .addCase(getProductsAdmin.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.adminProduct = [...state.adminProduct, action.payload];
      })

      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.adminProduct = state.adminProduct.filter(
          (el) => el.id !== +action.payload
        );
      })
      .addCase(deleteProduct.pending, (state) => {
        state.message = 'Загрузка, пожалуйста, подождите.';
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default adminSlice.reducer;
