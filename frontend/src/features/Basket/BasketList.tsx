import React from 'react';
import { useSelector } from 'react-redux';
import { selectedDish } from '../../store/product/selectors';
import { useAppDispatch } from '../../store/store';
import { deleteOrder, minusDish, plusDish } from '../Catalog/productSlice';
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

  // ДОБИТЬ
  // вынести ф-ии повторяющиеся в один компонент для вызова уже самих результатов выполнения ф-й
  const orderPrice = selectedArr.reduce((acc, el) => acc + el.price, 0);
  //
  // TODO basket svg
  // svg сдeлать ссылку на public!
  // DONE // СДЕЛАТЬ ПУЧТУЮ КОРЗИНУ = ТИПА ЗАКАЗОВ НЕТ((

  return (
    <>
      <br />
      {selectedArr.length ? (
        <div className={styles.basket}>
          <>
            <div className={styles.basketHeader}>
              <span>Ваш заказ</span>
              <span> {orderPrice} ₽ </span>
              <img
                className={styles.icon}
                src="/icons/trash.svg"
                alt="instagram"
                width="23px"
                onClick={() => dispatch(deleteOrder([]))}
              />
            </div>

            <div className={styles.scroll}>
              {unsortUniqArrOfDishes.map((basDish) => (
                <>
                  <div key={basDish.id} className={styles.order}>
                    <div className={styles.imageBox}>
                      <img src={basDish.image} alt="foto" />
                    </div>

                    <div className={styles.infoContainer}>
                      <a href={`/catalog${basDish.path}/${basDish.id}`}>
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
