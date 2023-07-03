import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './types/ProductType';
import DishPage from './DishPage';

function DishCard({ p }: { p: Product }): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="element">
        <img src={p.image} alt="product" onClick={() => navigate(`${p.id}`)} />
        <div className="element__title">
          <span className="product_name">{p.product_name}</span>
          <span className="weight">{p.weight} гр.</span>
          <div className="price">{p.price} ₽</div>
          <button className="but">+</button>
        </div>

        <div>
          <p>{p.composition}</p>
        </div>
      </div>
    </>
  );
}

export default DishCard;
