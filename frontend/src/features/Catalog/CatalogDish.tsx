import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import getCatagoty from '../../utils/getCatagoty';
import Header from '../Header';
//
function CatalogDish(): JSX.Element {
  const navigate = useNavigate();

  //------------------------------------------ ПРОБА:
  // 1. Беру из БД все продукты отсорторованные по order  и отрисовываю их
  // 2. Исп-ю категорию в названии и первое фото из категории // исходя из 1 не нужно

  // 3. Исп-ю функцию
  //      - или для создания нового массива с нужными парамерами(название, путь, фото)
  //      - или для перевода названия категории в имя пути === следовательно из базы можно убрать столбец PATH
  // 4.
  return (
    <>
      <Header />
      <div className="menu">
        {getCatagoty().map((dish) => (
          <>
            <div className="menu__item" key={dish.id}>
              <img
                src={dish.image}
                alt="dish"
                onClick={() => navigate(`.${dish.path}`)}
              />
              <p>{dish.product_category}</p>
            </div>
          </>
        ))}
      </div>

      {/* ПОДУМАТЬ КАК ОРЕНДЕРИТЬ ЧЕРЕЗ УСЛ РЕНДЕР */}
      {/* <aside>
        {menuArr.map((dish) => (
          <>
            <div className="menu__item-nav">
              <p>{dish.name}</p>
            </div>
          </>
        ))}
      </aside> */}
    </>
  );
}

export default CatalogDish;

/* <div onClick={onClModal}>Pizza</div>
        <div onClick={() => navigate(`/pizza`)}>Pizza</div>
        <div>Японская кухня</div>
        <div>Шаверма</div>
        <div>Салаты</div>
        <div>Первое блюдо</div>
        <div>Горячие блюда</div>
        <div>Паста и ризотто</div>
        <div>Вареники</div>
        <div>Спиртное</div>
        <div>Пиво "Потапыч"</div>
        <div>Закуски к пиву</div>
        <div>Напитки</div>
        <div onClick={onClModal}>Чизбургеры</div>
        {modal && (
          <div id="modal" onClick={onClModal}>
            POPados
            <img
              src="https://baking-academy.ru/local/phpThumb/phpThumb.php?src=/upload/iblock/591/591d601f27b30d737aecafb72d046db9.jpg&maxb=300000&w=720&h=518&aoe=1&zc=1&"
              alt=""
            />
          </div>
        )} */
