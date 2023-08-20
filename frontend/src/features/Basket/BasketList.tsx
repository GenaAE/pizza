import React from 'react';
import { useSelector } from 'react-redux';
import { selectedDish } from '../../store/product/selectors';
import { useAppDispatch } from '../../store/store';
import { minusDish, plusDish } from '../Catalog/productSlice';
import styles from './Basket.module.scss';
import sort from '../../utils/sort';
import { NavLink } from 'react-router-dom';

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
  //
  // TODO basket svg
  //СДЕЛАТЬ РАЗДЕЛЕНИЕ
  // svg сдeлать ссылку на public!
  // DONE // СДЕЛАТЬ ПУЧТУЮ КОРЗИНУ = ТИПА ЗАКАЗОВ НЕТ((
  console.log(countOfDishId);
  return (
    <>
      <br />
      {selectedArr.length ? (
        <div className={styles.basket}>
          <>
            <div className={styles.basketHeader}>
              <span>Ваш заказ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                viewBox="0 0 64 80"
                x="0px"
                y="0px"
                width={23}
              >
                <title>Ecommerce Outline</title>
                <path d="M57.81,23.29a3.43,3.43,0,0,0-.56,0H51.93L42,4.64a3,3,0,0,0-1.82-1.49,3.08,3.08,0,0,0-4,2.94,3,3,0,0,0,.37,1.45L45,23.25H19.17l8.39-15.7a3.1,3.1,0,0,0,.37-1.46,3.09,3.09,0,0,0-4-2.94,3,3,0,0,0-1.82,1.49L12.19,23.25H6.75A3.75,3.75,0,0,0,3,27v2.25A3.75,3.75,0,0,0,6.75,33h.36l3.12,21.74A7.34,7.34,0,0,0,17.46,61H46.63a7.33,7.33,0,0,0,7.23-6.29l3-21.71h.36A3.75,3.75,0,0,0,61,29.25V27A3.73,3.73,0,0,0,57.81,23.29ZM38.19,6.09a1.07,1.07,0,0,1,.58-1A1.17,1.17,0,0,1,39.28,5a1.08,1.08,0,0,1,.95.57L51,25.73a1.11,1.11,0,0,1,.08.82,1.07,1.07,0,0,1-.52.64h0a1,1,0,0,1-.82.08,1.1,1.1,0,0,1-.64-.52L38.32,6.59A1,1,0,0,1,38.19,6.09Zm-14.3-.51a1.07,1.07,0,0,1,.64-.52,1.12,1.12,0,0,1,.31,0,1.1,1.1,0,0,1,.52.14,1.05,1.05,0,0,1,.57.94,1,1,0,0,1-.13.51L15,26.74a1.07,1.07,0,0,1-.65.53,1,1,0,0,1-.82-.08,1.11,1.11,0,0,1-.53-.65,1,1,0,0,1,.09-.81Zm28,48.85A5.32,5.32,0,0,1,46.63,59H17.46a5.33,5.33,0,0,1-5.25-4.55L9.13,33H54.87ZM59,29.25A1.76,1.76,0,0,1,57.25,31H6.75A1.76,1.76,0,0,1,5,29.25V27a1.76,1.76,0,0,1,1.75-1.75h4.42A3.07,3.07,0,0,0,12.62,29a3.08,3.08,0,0,0,2.35.24,3.07,3.07,0,0,0,1.83-1.5l1.31-2.44H46l1.31,2.44a3.07,3.07,0,0,0,1.83,1.5,3.07,3.07,0,0,0,3.79-3.94h4.31l.26,0A1.74,1.74,0,0,1,59,27Z" />
                <path d="M22,34.31a3.28,3.28,0,0,0-3.27,3.28V54a3.28,3.28,0,0,0,6.55,0V37.59A3.28,3.28,0,0,0,22,34.31ZM23.28,54a1.28,1.28,0,0,1-2.55,0V37.59a1.28,1.28,0,1,1,2.55,0Z" />
                <path d="M32,34.31a3.28,3.28,0,0,0-3.28,3.28V54a3.28,3.28,0,0,0,6.56,0V37.59A3.28,3.28,0,0,0,32,34.31ZM33.28,54a1.28,1.28,0,0,1-2.56,0V37.59a1.28,1.28,0,0,1,2.56,0Z" />
                <path d="M42,34.31a3.28,3.28,0,0,0-3.28,3.28V54a3.28,3.28,0,0,0,6.55,0V37.59A3.28,3.28,0,0,0,42,34.31ZM43.27,54a1.28,1.28,0,0,1-2.55,0V37.59a1.28,1.28,0,1,1,2.55,0Z" />
                <text
                  x="0"
                  y="79"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                ></text>
                <text
                  x="0"
                  y="84"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                ></text>
              </svg>
            </div>
            <div className={styles.scroll}>
              {unsortUniqArrOfDishes.map((basDish) => (
                <>
                  <div key={basDish.id} className={styles.order}>
                    {/* <div key={basDish.id}> */}
                    {/* <span>{basDish.count}</span> */}
                    <div className={styles.imageBox}>
                      <img
                        src={basDish.image}
                        alt="foto"
                        // style={{ width: '60px' }}
                      />
                    </div>

                    <div className={styles.infoContainer}>
                      <a href="http://">
                        <span>{basDish.product_name}</span>
                      </a>

                      <div className={styles.amountAndBasketCountDishes}>
                        <div className={styles.basketCountDishes}>
                          <button
                            className="but"
                            type="button"
                            onClick={() => dispatch(plusDish(basDish))}
                          >
                            +
                          </button>
                          <span>{countOfDishId[basDish.id]}</span>
                          <button
                            className="but"
                            type="button"
                            onClick={() => dispatch(minusDish(basDish))}
                          >
                            -
                          </button>
                        </div>
                        <div>{countOfDishId[basDish.id] * basDish.price} ₽</div>
                      </div>
                    </div>
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
      ) : (
        <>
          <div className={styles.basket}>
            <div className={styles.basketHeader}>
              <span>Ваш заказ:</span>
            </div>
            <div className={styles.orderNone}>ЗАКАЗА ЕЩЁ НЕТ</div>
          </div>
        </>
      )}
    </>
  );
}

export default BasketList;
