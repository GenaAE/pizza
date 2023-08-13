import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/ProductType';
import { plusDish } from '../../productSlice';
import { useAppDispatch } from '../../../../store/store';
import styles from './DishCard.module.scss';

function DishCard({ p }: { p: Product }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Сделать значек выбора на фото блюда

  return (
    <>
      <div className={styles.element}>
        <img
          className={styles.img}
          src={p.image}
          alt="product"
          onClick={() => navigate(`${p.id}`)}
        />
        <div className={styles.element__title}>
          <span className={styles.product_name}>{p.product_name}</span>
          <span className={styles.weight}>{p.weight} гр.</span>
          <div className={styles.price}>{p.price} ₽</div>

          <button
            className={styles.but}
            type="button"
            onClick={() => dispatch(plusDish(p))}
          >
            +
          </button>
        </div>
        <div className={styles.product_composition}>
          <p>{p.composition}</p>
        </div>
      </div>
    </>
  );
}

export default DishCard;
