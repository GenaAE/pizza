import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectedDish } from '../../store/product/selectors';
import { RootState } from '../../store/store';
import BasketList from '../Basket/BasketList';
import DishCard from '../Catalog/DishList/DishCard/DishCard';
import styles from './Header.module.scss';
/**
 *
 * @returns возв компонент хедер
 */
function Header(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const selectedArr = useSelector(selectedDish); // массив выбранных блюд

  const [data, setData] = useState('');
  const [btn, setBtn] = useState(false);
  const [basket, setBasket] = useState(false);

  const onChange = (e: any): void => {
    setData(e.target.value);
  };
  console.log(data);
  console.log(products);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function Search() {
    const r = products.filter((el) =>
      el.product_name.toUpperCase().includes(data.toLocaleUpperCase())
    );
    console.log(r);
    return r;
  }
  console.log(Search());

  const orderPrice = selectedArr.reduce((acc, el) => acc + el.price, 0);
  // TODO расчеты
  // свести расчеты в одно место = повторения делать и затем их свести
  //orderPrice 2 повтора
  //product 2-3
  //selectedArr 2-3

  return (
    <>
      {/* <div className="desktop"> */}
      <div className={styles.header}>
        <NavLink to="/catalog">
          <div className={styles.header__left}>Меню</div>
        </NavLink>
        <NavLink to="/">
          <div className={styles.header__center}>
            Сеть Кафе Пиццерий "Pizza"
          </div>
        </NavLink>
        <div className={styles.header__right}>
          <img
            className={styles.icon}
            src="icons/search_icon.svg"
            alt="search"
            // SCSS img style for icon
            margin-right="15px"
            onClick={() => setBtn(!btn)}
          />
          <p>Ваш заказ</p>
          <img
            className={styles.icon}
            src="icons/shopping-basket.svg"
            alt="basket"
            width="20px"
            onClick={() => setBasket(!basket)}
          />
        </div>
      </div>

      {basket && <BasketList />}
      {btn && (
        <>
          <div className={styles.megaModal}>
            <div className={styles.bigModal}>
              <div className={styles.modalInput}>
                <input type="text" placeholder="Поиск" onChange={onChange} />
                <button type="button" onClick={() => setBtn(!btn)}>
                  X
                </button>
              </div>
              <div className={styles.modal}>
                {data.length > 0 &&
                  Search().map((p) => (
                    //   <div className={styles.modal}>{el.product_name}</div>
                    // ))
                    <DishCard p={p} key={p.id} />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
      {/* </div> */}
    </>
  );
}

export default Header;
