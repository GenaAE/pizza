import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import Header from '../Header';
// МЕНЮ
// сделать переход на пиццу
// отрисовать компонент пицца с 10 элементами
//

// const menuArr = [
//   {
//     name: 'Пицца',
//     img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
//     path: '/products',
//   },
//   {
//     name: 'Японская кухня',
//     img: 'https://img.myslo.ru/NewsImage/76/e7/76e75796-19d1-4a6f-bb8d-ba68d9596981_3.jpg',
//     path: '/products',
//   },
//   {
//     name: 'Шаверма',
//     img: 'https://vkus-eda-dostavka.ru/static/images/05b72d3252cdb4653ece78555e7cb04d-600x450.jpeg',
//     path: '/products',
//   },
//   {
//     name: 'Салаты',
//     img: 'https://zira.uz/wp-content/uploads/2018/07/italyanskiy-salat-2.jpg',
//     path: '/products',
//   },
//   {
//     name: 'Первое блюдо',
//     img: 'https://shuba.life/static/content/thumbs/740x493/9/f4/drkpup---c740x493x50px50p-c740x493x50px50p-up--83eb4f9d484e425726fa959b5a7baf49.jpg',
//     path: '/products',
//   },
//   {
//     name: 'Горячие блюда',
//     img: 'https://hip2go.ru/api2/images/IikoProducts26/c1c668e7c6-1_500x353.jpg',
//     path: '/products',
//   },
//   {
//     name: 'Паста и ризотто',
//     img: 'https://fishbox-rest.ru/wp-content/uploads/2022/01/pasta-and-risotto-400x267.jpg',
//     path: '/products',
//   },
//   {
//     name: 'Вареники',
//     img: 'https://img.delo-vcusa.ru/2012/10/DSC_0798_1.jpg',
//     path: '/products',
//   },
// ];

function CatalogHome(): JSX.Element {
  const arrCatalogHome = useSelector(
    (store: RootState) => store.products.products
  );
  console.log(arrCatalogHome);

  //------------------------------------------ Вывел массив  ------------------------------------------
  // для отрисовки на гл стр список категорий продуктов
  let top = [];
  let op = '';
  for (let i = 0; i < arrCatalogHome.length; i++) {
    if (arrCatalogHome[i].path !== op) {
      top.push(arrCatalogHome[i]);
    }
    op = arrCatalogHome[i].path;
  }
  console.log(top);
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
        {top.map((dish) => (
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

export default CatalogHome;

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
