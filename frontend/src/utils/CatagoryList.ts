import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../features/Catalog/types/ProductType';
import { productSelector } from '../store/product/selectors';

// -------------------------------- ф-я для выбора категрии блюда ----------------------------------------//

const CatagoryList = (): Product[] => {
  const products = useSelector(productSelector);

  let top = [];
  let op = '';
  for (let i = 0; i < products.length; i++) {
    if (products[i].path !== op) {
      top.push(products[i]);
    }
    op = products[i].path;
  }
  // const r = [...products];
  // const uni = products.filter((item, index) => {
  //   return index === products.indexOf(item);
  // });

  //
  // const uni = r.reduce((uniq, item): any => {
  //   return uniq.includes(item) ? uniq : { ...uniq, item };
  // });
  // console.log(uni);
  return top;
};
export default CatagoryList;
