import React from 'react';
import { Product } from '../features/Catalog/types/ProductType';

// -------------------------------- ф-я для сортировки )) ----------------------------------------//

const sort = (selectDish: Product[]): any => {
  const arr = [...selectDish];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k].id > arr[k + 1].id) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
};

export default sort;
