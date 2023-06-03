import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// МЕНЮ
// сделать переход на пиццу
// отрисовать компонент пицца с 10 элементами
//

const menuArr = [
  {
    name: 'Пицца',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
    path: '/pizza',
  },
  {
    name: 'Японская кухня',
    img: 'https://img.myslo.ru/NewsImage/76/e7/76e75796-19d1-4a6f-bb8d-ba68d9596981_3.jpg',
    path: '/',
  },
  {
    name: 'Шаверма',
    img: 'https://vkus-eda-dostavka.ru/static/images/05b72d3252cdb4653ece78555e7cb04d-600x450.jpeg',
    path: '/pizza',
  },
  {
    name: 'Салаты',
    img: 'https://zira.uz/wp-content/uploads/2018/07/italyanskiy-salat-2.jpg',
    path: '/pizza',
  },
  {
    name: 'Первое блюдо',
    img: 'https://shuba.life/static/content/thumbs/740x493/9/f4/drkpup---c740x493x50px50p-c740x493x50px50p-up--83eb4f9d484e425726fa959b5a7baf49.jpg',
    path: '/pizza',
  },
  {
    name: 'Горячие блюда',
    img: 'https://hip2go.ru/api2/images/IikoProducts26/c1c668e7c6-1_500x353.jpg',
    path: '/pizza',
  },
  {
    name: 'Паста и ризотто',
    img: 'https://fishbox-rest.ru/wp-content/uploads/2022/01/pasta-and-risotto-400x267.jpg',
    path: '/pizza',
  },
  {
    name: 'Вареники',
    img: 'https://img.delo-vcusa.ru/2012/10/DSC_0798_1.jpg',
    path: '/pizza',
  },
];
function MenuProd(): JSX.Element {
  const navigate = useNavigate();
  const { pizza } = useParams();
  console.log(pizza);
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
        {menuArr.map((dish) => (
          <>
            <div className="menu-prod__item-nav">
              <p onClick={() => navigate(dish.path)}>{dish.name}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default MenuProd;
