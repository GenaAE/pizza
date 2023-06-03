import React from 'react';
import { PizzaType } from './types/PizzaType';

function Pizza({ p }: { p: PizzaType }): JSX.Element {
  return (
    <>
      <div className="element">
        <img src={p.img} alt="pizza" />
        <div className="element__title">
          <span className="name">{p.name}</span>
          <span className="massa">{p.massa} гр.</span>
          <div className="price">{p.price} ₽</div>
          <button className="but">+</button>
        </div>

        <div>
          <p>{p.disc}</p>
        </div>
      </div>
    </>
  );
}

export default Pizza;
