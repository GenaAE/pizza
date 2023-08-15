import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Basket.module.scss';
import { RootState, useAppDispatch } from '../src/store/store';
import {
  minusDish,
  plusDish,
  plusDishHead,
  orderSum,
  minusBasketSumm,
} from '../src/features/Catalog/productSlice';
import { Product } from '../src/features/Catalog/types/ProductType';

function Order({ dish }: { dish: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const check = useSelector((store: RootState) => store.products.check);

  //------------------------  расчет суммы для каждого блюда--------
  ////------------------------ расчет пляшет от одного блюда и сбрасывает остальные суммы
  let count = Number(dish.onlyValuesOfDishues); // привязка к массиву в котором вложено кол-во блюд прямо в объект+ уникальность
  let price = Number(dish.price);

  const [basketScore, setbasketScore] = useState(0); // basketScore = простой счет блюд по позиции
  const [numOfDishes, setnumOfDishes] = useState(0); // numOfDishes = счет блюд
  const [summ, setSumm] = useState(check); // заменил price на check
  // const ref = useRef(summ);
  // console.log(ref.current);

  useEffect(() => {
    setnumOfDishes(basketScore + count);
  }, [count, basketScore]);

  useEffect(() => {
    setSumm(numOfDishes * price);
  }, [numOfDishes, price]);

  const plus = (): void => {
    setbasketScore((prev) => prev + 1);
    setnumOfDishes(basketScore + count);
    setSumm(numOfDishes * price);
    // dispatch(orderSum(summ));
    // dispatch(orderSum(price));
    dispatch(orderSum(dish)); // если так = отпр блюдо и масс увел на него???
    // dispatch(plusDish(dish));
    // price = summ;
    // count = Number(count) + 1;
  };

  const minus = (): void => {
    // выбор канешно)) уходить в минус или придумать по красоте)
    if (summ > price) {
      setSumm((prev) => Number(prev) - price);
      setnumOfDishes((prev) => prev - 1);
      setbasketScore((prev) => prev - 1);
      dispatch(minusBasketSumm(price));
    } else {
      dispatch(minusDish(dish));
    }
  };

  return (
    <>
      <div className={styles.order}>
        <img src={dish.image} style={{ width: '100px' }} alt="dishPhoto" />
        <div>{dish.product_name}</div>
        <div> Цена {dish.price}</div>
        <div> Сумма {summ}</div>
        {/* <div>Стоимость price = {price}</div> */}
        {/* <br />
          <div>Кол-во Count {count}</div>
          <br />
          <div> </div>
          <div>Кол-во basketScore {basketScore}</div>
          <br /> */}
        <div className={styles.button}>
          {' '}
          <button
            className={styles.order__buttonPlus}
            type="button"
            onClick={plus}
          >
            +
          </button>
          <div> Блюд {numOfDishes} </div>
          <button
            className={styles.order__buttonMinus}
            type="button"
            onClick={minus}
          >
            {/* <button type="button" onClick={() => dispatch(minusDish(dish))}> */}
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Order;
