import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/ProductType';

function CatalogDishesCard({ dish }: { dish: Product }): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu__item" key={dish.id}>
        <img
          src={dish.image}
          alt="dish"
          onClick={() => navigate(`.${dish.path}`)}
        />
        <p>{dish.product_category}</p>
        {/* <h1>{dish.product_category}</h1> */}
      </div>
    </>
  );
}

export default CatalogDishesCard;
