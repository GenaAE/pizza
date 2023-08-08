import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectedDish } from '../../store/product/selectors';
import { RootState, useAppDispatch } from '../../store/store';
import sort from '../../utils/sort';
// import BasketList from './BasketList';
import styles from './Basket.module.scss';
import { Product } from '../Catalog/types/ProductType';
// import Order from '../../../prevComponent/Order';
import BasketList from './BasketList';

function Basket(): JSX.Element {
  const selectDish = useSelector(selectedDish);
  const check = useSelector((store: RootState) => store.products.check);

  return (
    <>
      <div className={styles.basket}>
        {selectDish.length > 0 && (
          <div style={{ width: '130px', display: 'flex' }}>
            <span>Ваш заказ на сумму: {check}</span>
          </div>
        )}

        <br />
        {selectDish.length > 0 && <div>Общая сумма заказа : {check}</div>}
        <BasketList />
      </div>
    </>
  );
}

export default Basket;
