import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './types/ProductType';
import { plusDish } from './productSlice';
import { useAppDispatch } from '../../store/store';

function DishCard({ p }: { p: Product }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="element">
        <img src={p.image} alt="product" onClick={() => navigate(`${p.id}`)} />
        <div className="element__title">
          <span className="product_name">{p.product_name}</span>
          <span className="weight">{p.weight} гр.</span>
          <div className="price">{p.price} ₽</div>
          {/* СДелать еще диспач для внесения карточки продукта в корзину */}
          <button
            className="but"
            type="button"
            //-------------------------- как обойти расчет через состояние?
            // onClick={() => dispatch(plusCheck(p.price) )}
            //-------------------------- получаю блюдо и добавляю к состоянию
            onClick={() => dispatch(plusDish(p))}
          >
            +
          </button>
        </div>
        <div>
          <p>{p.composition}</p>
        </div>
        {/* // сделать условие нажатия на кнопку заказ + //при котором изм состояние
        на назнавание и отображение в заказе //или сделать отдельную комп для
        отрисовки в заказе */}
      </div>
    </>
  );
}

export default DishCard;
