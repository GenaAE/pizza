import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../features/Catalog/types/ProductType';
import { productSelector } from '../store/product/selectors';

const getCatagoty = (): Product[] => {
  const products = useSelector(productSelector);

  // ХОТЕЛ ЭКСПОРТИРОВАТЬ ФУНКЦИЮ = > ДЛЯ ИСП-Я В КАТАЛОГДИШ ))
  //что-то сложновато пока
  // СДЕЛАТЬ КОМПОНЕТ ИЛИ ЧТОТО ПОХОЖЕЕ ГДЕ храниться БУДУТ ФУНКЦИИ ПОВТОРЯЮЩИЕСЯ

  // сделал компонент
  // сложность фильтрации закл-сь в том, что приходил массив в перемешку
  // хотел ббез сорта обойтись
  // выход = с бэка присылать в порядке ASD
  let top = [];
  let op = '';
  for (let i = 0; i < products.length; i++) {
    if (products[i].path !== op) {
      top.push(products[i]);
    }
    op = products[i].path;
  }
  return top;
};
export default getCatagoty;
