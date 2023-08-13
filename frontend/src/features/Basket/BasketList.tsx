import React from 'react';
import { useSelector } from 'react-redux';
import { selectedDish } from '../../store/product/selectors';
import { useAppDispatch } from '../../store/store';
import { minusDish, plusDish } from '../Catalog/productSlice';
import styles from './Basket.module.scss';
import sort from '../../utils/sort';

function BasketList(): JSX.Element {
  const selectedArr = useSelector(selectedDish); // массив выбранных блюд
  const dispatch = useAppDispatch();
  //---------------------------- неотсортированный массив уникал блюд в заказе--------------
  const unsortUniqArrOfDishes = selectedArr.filter(
    (el, index) => index === selectedArr.indexOf(el)
  );

  //---------------------------- сортировка для редусера и копия массива--------------
  const sortedSelectedArr = [...sort(selectedArr)];
  const sortedIdSelectedArr = sortedSelectedArr.map((el) => el.id);
  //---------------------------- КОЛИЧЕСТВО каждой позиции ----------------------------
  const countOfDishId = sortedIdSelectedArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  //---------------------------- СУММА ЗАКАЗА ------------------------------------------
  const orderPrice = selectedArr.reduce((acc, el) => acc + el.price, 0);

  return (
    <>
      <br />

      {!!selectedArr.length && (
        <div className={styles.basket}>
          <>
            <div>
              <span>Ваш заказ на сумму: {orderPrice}</span>
            </div>
            <div className={styles.scroll}>
              {unsortUniqArrOfDishes.map((basDish) => (
                <>
                  <div key={basDish.id} className={styles.order}>
                    {/* <div key={basDish.id}> */}
                    <span>{basDish.count}</span>
                    <img
                      src={basDish.image}
                      alt="foto"
                      style={{ width: '60px' }}
                    />

                    <span>{basDish.product_name}</span>

                    <div> Цена {basDish.price}</div>

                    <div>Сумма {countOfDishId[basDish.id] * basDish.price}</div>
                    <button
                      className="but"
                      type="button"
                      onClick={() => dispatch(plusDish(basDish))}
                    >
                      +
                    </button>
                    <div>{countOfDishId[basDish.id]}</div>
                    <button
                      className="but"
                      type="button"
                      onClick={() => dispatch(minusDish(basDish))}
                    >
                      -
                    </button>
                  </div>
                  {/* </div> */}
                </>
              ))}
            </div>
            <div className={styles.check}>
              <span>Всего к оплате: </span>
              <span> {orderPrice} ₽ </span>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default BasketList;
