import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <>
      {/* <div className="desktop"> */}
      <div className="desktop-header">
        <div className="desktop-header__left">Меню</div>
        <NavLink to="/">
          <div className="desktop-header__center">ПОТАПЫЧ </div>
        </NavLink>
        <div className="desktop-header__right">Ваш заказ</div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
