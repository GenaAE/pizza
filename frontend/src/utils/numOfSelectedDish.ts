import { useSelector } from 'react-redux';
import { selectedDish } from '../store/product/selectors';
import sort from './sort';

//TODO типиз-я any
// когда использую string & number в ф-ии то ругается
//? как типизировать что возвращает ф-я
export function NumOfSelectedDish(): any {
  const selectedArr = useSelector(selectedDish); // массив выбранных блюд
  const sortedSelectedArr = [...sort(selectedArr)];
  const sortedIdSelectedArr = sortedSelectedArr.map((el) => el.id);
  //---------------------------- КОЛИЧЕСТВО каждой позиции ----------------------------
  const countOfDishId = sortedIdSelectedArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return countOfDishId;
}

// export default NumOfSelectedDish;
