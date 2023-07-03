import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import Header from '../Header';
import MenuProd from '../MenuProd';
import { Product } from './types/ProductType';

function DishPage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const arrDish = useSelector((store: RootState) => store.products.products);
  console.log(arrDish);

  const dish = arrDish.find((dish) => dish.id === Number(id));
  console.log(dish);
  return (
    <>
      {dish && (
        <div className="dish">
          <Header />
          <MenuProd />
          <div className="page">
            <div className="element">
              <img src={dish.image} alt="product" />
              <div className="element__title">
                <span className="product_name">{dish.product_name}</span>
                <span className="weight">{dish.weight} гр.</span>
                <div className="price">{dish.price} ₽</div>
                <button className="but">+</button>
              </div>

              <div>
                <p>{dish.composition}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DishPage;
