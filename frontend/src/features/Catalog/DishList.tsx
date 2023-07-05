import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../Header';

import MenuProd from '../MenuProd';
import Basket from '../Basket';

import { useParams } from 'react-router-dom';
import DishCard from './DishCard';

function CatalogListSections(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);

  // ------------------------------ фильтр для отрисовки тольок одно вида блюд  // ------------------------------
  const params = useParams();

  const dishList = products.filter((el) => el.path === `/${params.path}`); // сравнение упорото только из-за БД и как там прописано

  // ------------------------------ для отрисовки МЕНЮ_НАВ и внесения списка категорий + пути

  // const cat = Array.from(
  //   new Set(products.map((el) => el.product_category + ' ' + el.path))
  // );

  // ------------------------------ для отрисовки МЕНЮ_НАВ и внесения списка категорий + пути
  return (
    <>
      {/* ХЗ как сделать отрисовку всех комп в одной коробке?? */}
      <div className="list">
        <Header />
        <MenuProd />

        <div className="list__contaner">
          <div className="list__item">
            <div className="list__title">
              {/* <h1>{menuProduct_List?.product_category}</h1> */}
              <p>
                СЛОГАН ДЛЯ КАЖДОЙ КАТЕГОРИИ = Вкуснейшая пицца, которую можно
                купить за деньги на земле!
              </p>
            </div>
            {dishList.map((p) => (
              <>
                <DishCard key={p.id} p={p} />
              </>
            ))}
          </div>
        </div>
        <div
          className="basket"
          style={{ position: 'fixed', top: '100px', right: '10px' }}
        >
          <Basket />
        </div>
      </div>
    </>
  );
}

export default CatalogListSections;
