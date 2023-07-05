import React from 'react';
import { useSelector } from 'react-redux';
import { selectedDish } from '../store/product/selectors';

function Basket(): JSX.Element {
  const seldDish = useSelector(selectedDish);
  return (
    <>
      <div className="basket">
        {seldDish.map((dish) => (
          <>
            <img src={dish.image} style={{ width: '100px' }} />
            <div>{dish.product_name}</div>
            <div>{dish.price}</div>
          </>
        ))}
      </div>
      ;
    </>
  );
}

export default Basket;
