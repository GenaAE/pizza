import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../store/store';
import BasketList from '../../../Basket/BasketList';
import Header from '../../../Header/Header';
import MenuProd from '../../../SideMenu/SideMenu';
import { plusDish } from '../../productSlice';
import styles from './DishPage.module.scss';

function DishPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const arrDish = useSelector((store: RootState) => store.products.products);

  const dish = arrDish.find((dish) => dish.id === Number(id));

  return (
    <>
      {dish && (
        <div className={styles.dish}>
          <Header />
          <MenuProd />
          <div className={styles.page}>
            <div className={styles.element}>
              <img className={styles.img} src={dish.image} alt="product" />
              <div className={styles.element__title}>
                <span className={styles.product_name}>{dish.product_name}</span>
                <span className={styles.weight}>{dish.weight} гр.</span>
                <div className={styles.price}>{dish.price} ₽</div>
                <button
                  className={styles.but}
                  type="button"
                  onClick={() => dispatch(plusDish(dish))}
                >
                  +
                </button>
              </div>

              <div>
                <p>{dish.composition}</p>
                <hr />
                <p>Литературное описание данного блюда</p>
              </div>
            </div>
          </div>
          <BasketList />
        </div>
      )}
    </>
  );
}

export default DishPage;
