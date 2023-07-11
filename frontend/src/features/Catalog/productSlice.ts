/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as productsApi from './api';

const initialState: State = {
  products: [],
  error: undefined,
  check: 0, // счет для заказа в Хедере
  basketDish: [],
  // score: 0, попытка сделать счетчик -
  //не учел что счетчик считает все блюда а не поотдельности
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
    // добавляю сумму и само блюдо
    plusDish: (state, action) => {
      state.check = +state.check + +action.payload.price;
      state.basketDish = [...state.basketDish, action.payload];
      // state.score = +state.score + +action.payload.forBasket;
    },
    //убавляю сумму - блюдо надо изменить кол-во в массиве
    minusDish: (state, action) => {
      state.basketDish = state.basketDish.filter(
        (el) => el.id !== action.payload.id
      );
      // state.basketDish = state.basketDish.map((el) =>
      // if (el.onlyValuesOfDishues === action.payload.onlyValuesOfDishues) {
      // el.onlyValuesOfDishues = Number(el.onlyValuesOfDishues) - 1
      // }
      // );
      // (el) => [...el, el.onlyValuesOfDishues: el.onlyValuesOfDishues - action.payload.forBasket]
      // {...el, el.onlyValuesOfDishues}
      // );
      // state.check = +state.check - +action.payload.price;
      // state.basketDish = state.basketDish === action.payload.id;
    },
    // scorePlus: (state, action) => {
    //   state.score = +state.score + +action.payload;
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

export const { plusDish, minusDish } = productSlice.actions;
export default productSlice.reducer;
