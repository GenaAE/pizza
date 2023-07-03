import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../store';
// МЕНЮ
// сделать переход на пиццу
// отрисовать компонент пицца с 10 элементами
//

function MenuProd(): JSX.Element {
  const navigate = useNavigate();

  const products = useSelector((store: RootState) => store.products.products);
  console.log(products);
  // ПРОБЛЕМКА === ОТРИСОВЫВАЕТ КАТЕГОРИИ КОТ НЕ ДБ))
  // ДЕЛАТЬ ВСПЛЫВАЮЩИЕ ОКНА ИЛИ ОСТВАТЬ ТАК НА ОТВЕТ-ТЬ ВВОДЯЩИХ
  const cat = Array.from(new Set(products.map((el) => el.product_category)));
  const catPath = Array.from(new Set(products.map((el) => el.path)));
  console.log(catPath);

  return (
    <>
      {/* <div className="menu">
        {menuArr.map((dish) => (
          <>
            <div className="menu__item">
              <img src={dish.img} onClick={() => navigate(dish.path)} />
              <p>{dish.name}</p>
            </div>
          </>
        ))}
      </div> */}

      {/* ПОДУМАТЬ КАК ОРЕНДЕРИТЬ ЧЕРЕЗ УСЛ РЕНДЕР */}
      <div className="menu-prod">
        <button>MENU</button>
        <div className="menu-prod__items">
          <>
            <div className="menu-prod__item-nav">
              <>
                {/* {products.map((dish) => (
                  <p onClick={() => navigate(`.${dish.path}`)}>
                    {dish.product_category}
                  </p>
                ))} */}
                {cat.map((el, i) => (
                  <p onClick={() => navigate(`/catalog${catPath[i]}`)}>{el}</p>
                ))}
              </>

              {/* <p onClick={() => navigate(dish.path)}>{dish.product_category}</p> */}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default MenuProd;

// ----------------------------------- Алгоритмы sheme -------------------------//
// const t = [];
// const w = [];

// for (let i = 0; i < products.length; i++) {
//   for (let r = 1; r < products.length; r++) {
//     if (products[i].path !== products[r].path) {
//       // console.log(products[i].path);
//       // console.log(products[r].path);
//       i = r;
//     }
//     t.push(products[r]);
//     // if (products[i].id === last[0].id) console.log('first');
//     // t.push(products[i]);
//   }
// }
// console.log(t);
// for (let i = 0; i < products.length; i++) {
// if (products[i].path !== products[i + 1].path) {
// console.log(products[i].path);
// console.log(products[r].path);

// t.push(products[i].product_category);
// }

// if (products[i].id === last[0].id) console.log('first');
// t.push(products[i]);
// }
// const arrMapDish =
// products.map((dish) => {
//   const cat = Array.from(
//     new Set(products.map((el) => el.product_category))
//   );
//   console.log(cat);
// });
