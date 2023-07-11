import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../store/store';

function Header(): JSX.Element {
  const check = useSelector((store: RootState) => store.products.check);

  return (
    <>
      {/* <div className="desktop"> */}
      <div className="desktop-header">
        <NavLink to="/catalog">
          <div className="desktop-header__left">Меню</div>
        </NavLink>
        <NavLink to="/">
          <div className="desktop-header__center">ПОТАПЫЧ </div>
        </NavLink>
        <div className="desktop-header__right">
          <p>Ваш заказ</p>
          <p>{check} руб</p>
          {/*  */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
