import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store/store';
/**
 *
 * @returns возв компонент хедер
 */
function Header(): JSX.Element {
  return (
    <>
      {/* <div className="desktop"> */}
      <div className="desktop-header">
        <NavLink to="/catalog">
          <div className="desktop-header__left">Меню</div>
        </NavLink>
        <NavLink to="/">
          <div className="desktop-header__center">
            Сеть Кафе Пиццерий "Потапыч"
          </div>
        </NavLink>
        <div className="desktop-header__right">
          <p>Ваш заказ</p>
          {/*  */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
