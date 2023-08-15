/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as productsApi from './api';

const initialState: State = {
  products: [],
  error: undefined,
  basketDish: [],
  check: 0, // счет для заказа в Хедере
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
      // простой счетчик
      // как добавить полный счетчик
      state.basketDish = [...state.basketDish, action.payload];
      // state.score = +state.score + +action.payload.forBasket;
      state.check = state.basketDish
        .map((el) => el.price)
        .reduce((acc, el) => acc + el, 0);
      // state.check = +state.check + action.payload.price;
    },

    //непригодно
    plusDishHead: (state, action) => {
      state.check = +action.payload; /// работает только с одним состоняием
    },
    // если сделать добавление в масс через ОРДЕР и нажатие + - именно DISH целиком
    orderSum: (state, action) => {
      // state.check = state.basketDish
      //   .map((el) => el.price)
      //   .reduce((acc, el) => acc + el, 0);

      state.check = state.check + action.payload.price;

      // let ror = selectDish?.map((el) => el.price)?.reduce((acc, el) => acc + el, 0);
      // console.log(ror);
    },
    //убавляю сумму - блюдо надо изменить кол-во в массиве
    minusBasketSumm: (state, action) => {
      state.check = +state.check - action.payload;
    },
    minusDish: (state, action) => {
      const idSelArr = state.basketDish.map((el) => el.id);
      //   .find((el) => el === action.payload.id);
      const ror = idSelArr.lastIndexOf(action.payload.id);
      console.log(ror, 'ror');
      console.log(idSelArr, 'idSelArr');

      state.basketDish.splice(ror, 1);
    },
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

export const { plusDish, minusDish, minusBasketSumm, orderSum, plusDishHead } =
  productSlice.actions;
export default productSlice.reducer;
