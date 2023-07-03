/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as productsApi from './api';

const initialState: State = {
  products: [],
  error: undefined,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const allProducts = await productsApi.getProducts();
    console.log(allProducts);
    return allProducts;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        console.log(initialState);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
