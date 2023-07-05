/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as productsApi from './api';

const initialState: State = {
  products: [],
  error: undefined,
  check: 0,
  basketDish: [],
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const allProducts = await productsApi.getProducts();

    return allProducts;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //сдесь проделать опэрации подсчета и внесения в заказ позиций
    // получение позиции заказа
    // получение суммы заказа
    // удаление из суммы заказа
    //
    // plusCheck: (state, action) => {
    //   state.check = +state.check + +action.payload;
    // },
    plusDish: (state, action) => {
      state.check = +state.check + +action.payload.price;
      state.basketDish = [...state.basketDish, action.payload];
    },
    //
    // getTodos: (state) => state,
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { plusDish } = productSlice.actions;
export default productSlice.reducer;
