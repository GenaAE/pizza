import React from 'react';
import { useAppDispatch } from '../../store/store';
import { deleteProduct } from './adminSlice';
import { AdminType } from './types/AdminType';

function ProductCard({ dish }: { dish: AdminType }): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteProduct(dish.id));
  };
  return (
    <div className="menu">
      <div>
        <div>{dish.path}</div>
        <div>{dish.product_category}</div>
        <div>{dish.product_name}</div>
        <div>{dish.weight}</div>
        <div>{dish.price}</div>
        <img src={dish.image} alt="foto" style={{ width: '300px' }} />
        <button type="button" onClick={deleteClickHandler}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
