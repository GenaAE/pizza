import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';
import styles from './Header.module.scss';
/**
 *
 * @returns возв компонент хедер
 */
function Header(): JSX.Element {
  return (
    <>
      {/* <div className="desktop"> */}
      <div className={styles.header}>
        <NavLink to="/catalog">
          <div className={styles.header__left}>Меню</div>
        </NavLink>
        <NavLink to="/">
          <div className={styles.header__center}>
            Сеть Кафе Пиццерий "Потапыч"
          </div>
        </NavLink>
        <div className={styles.header__right}>
          <p>Ваш заказ</p>
          {/*  */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
