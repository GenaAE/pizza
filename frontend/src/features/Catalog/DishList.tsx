import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Header from '../Header';
import Menu from './CatalogHome';
import MenuProd from '../MenuProd';
import Basket from '../Basket';

import { getProducts } from './productSlice';
import CatalogHome from './CatalogHome';
import { useParams } from 'react-router-dom';
import DishCard from './DishCard';
import Proba from './Proba';

function CatalogListSections(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  console.log(products);

  // ------------------------------ фильтр для отрисовки тольок одно вида блюд  // ------------------------------
  const params = useParams();

  const dishList = products.filter((el) => el.path === `/${params.path}`); // сравнение упорото только из-за БД и как там прописано

  // ------------------------------ для отрисовки МЕНЮ_НАВ и внесения списка категорий + пути

  const cat = Array.from(
    new Set(products.map((el) => el.product_category + ' ' + el.path))
  );
  // const cat_path = Array.from(new Set(products.map((el) => el.path)));
  console.log(cat);

  // ------------------------------ для отрисовки МЕНЮ_НАВ и внесения списка категорий + пути
  return (
    <>
      {/* ХЗ как сделать отрисовку всех комп в одной коробке?? */}
      <div className="list">
        <Header />
        <MenuProd />
        <Proba />

        <div className="list__contaner">
          <div className="list__item">
            <div className="list__title">
              {/* <h1>{menuProduct_List?.product_category}</h1> */}
              <p>Вкуснейшая пицца, которую можно купить за деньги на земле!</p>
            </div>
            {dishList.map((p) => (
              <>
                <DishCard key={p.id} p={p} />
              </>
            ))}
          </div>
        </div>
        <div
          className="PROBA"
          style={{ position: 'fixed', top: '100px', right: '10px' }}
        >
          {cat.map((name) => (
            <Basket name={name} />
          ))}
        </div>
        {/* <Basket /> */}
      </div>
    </>
  );
}

export default CatalogListSections;
