import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { minusDish } from './Catalog/productSlice';
import { Product } from './Catalog/types/ProductType';

function Order({ dish }: { dish: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  //------------------------  расчет суммы для каждого блюда--------

  let count = Number(dish.onlyValuesOfDishues); // привязка к массиву + уникальность
  let price = Number(dish.price);

  const [basketScore, setbasketScore] = useState(0);
  const [obc, setObc] = useState(0);
  const [summ, setSumm] = useState(price);

  useEffect(() => {
    setObc(basketScore + count);
    // setbasketScore()
  }, [count, basketScore]);

  useEffect(() => {
    setSumm(obc * price);
  }, [obc, price]);

  const plus = (): void => {
    setbasketScore((prev) => prev + 1);
    setObc(basketScore + count);
    setSumm(obc * price);
    // price = summ;
    // count = Number(count) + 1;
  };

  const minus = (): void => {
    // выбор канешно)) уходить в минус или придумать по красоте)
    if (summ > price) {
      setSumm((prev) => Number(prev) - price);
      setObc((prev) => prev - 1);
      setbasketScore((prev) => prev - 1);
    } else {
      dispatch(minusDish(dish));
    }
  };

  return (
    <>
      <>
        <>
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
          <div> Кол-во блюд {obc}</div>
          <button type="button" onClick={plus}>
            +
          </button>
          <button type="button" onClick={minus}>
            {/* <button type="button" onClick={() => dispatch(minusDish(dish))}> */}
            -
          </button>
        </>
      </>
    </>
  );
}

export default Order;
