import React from 'react';

function старыеТемыю(): JSX.Element {
  //     const dispatch = useAppDispatch();

  //   //----------------------------------------  создание сортированного списка УНИКАЛЬНЫХ БЛЮД  ----------------------------------------

  //   const bas = [...sort(selectDish)];

  //   //---------------------------------------- ф-я для создания НЕ сортированного списка УНИКАЛЬНЫХ БЛЮД  ----------------------------------------

  //   const unsortUniqArrOfDishes = (): Product[] =>
  //     selectDish.filter((item, index) => {
  //       return index === selectDish.indexOf(item);
  //     });
  //   // console.log(unsortUniqArrOfDishes(), 'unsortUniqArrOfDishes');
  //   //---------------------------------------- создание массива только id для счета УНИКАЛЬНЫХ БЛЮД   ----------------------------------------

  //   let onlyDishuesId = [];
  //   for (let i = 0; i < bas.length; i++) {
  //     onlyDishuesId.push(bas[i].id);
  //   }
  //   // console.log(onlyDishuesId, 'onlyDishuesId');
  //   const countOfUniqDishId = onlyDishuesId.reduce((acc, el) => {
  //     acc[el] = (acc[el] || 0) + 1;
  //     return acc;
  //   }, {});
  //   // console.log(countOfUniqDishId, 'list of uni dish');
  //   // ВПИСЫВАЛ в обьект значение кол-ва блюд ))
  //   const onlyValuesOfDishuesF = Object.values(countOfUniqDishId);
  //   let order = [];
  //   for (let k = 0; k < unsortUniqArrOfDishes().length; k++) {
  //     for (let kp = 0; kp < unsortUniqArrOfDishes().length; kp++) {
  //       if (
  //         unsortUniqArrOfDishes()[k].id ===
  //         Number(Object.keys(countOfUniqDishId)[kp])
  //       ) {
  //         order.push({
  //           ...unsortUniqArrOfDishes()[k],
  //           onlyValuesOfDishues: onlyValuesOfDishuesF[kp],
  //         });
  //       }
  //     }
  //   }
  return <></>;
}

export default старыеТемыю;
