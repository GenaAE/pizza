import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Header from '../../Header/Header';
import styles from './Dish.module.scss';
import MenuProd from '../../SideMenu/SideMenu';
// import '../../../assets/styles/default.scss';

import { useParams } from 'react-router-dom';
import DishCard from './DishCard/DishCard';
import Footer from '../../Footer/Footer';
import BasketList from '../../Basket/BasketList';
/**
 *
 * @param dishList массив всех имеющихся блюд
 * @returns возв комп-т Выбранной Категории Блюд и карт-ки блюд
 */
function CatalogListSections(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  // console.log(products);

  // ------------------------------ фильтр для отрисовки только одно КАТЕГОРИИ БЛЮД  // ------------------------------
  const params = useParams();
  const dishList = products.filter((el) => el.path === `/${params.path}`);

  return (
    <>
      <div className={styles.list}>
        <Header />
        <MenuProd />

        <div className={styles.list__contaner}>
          <div className={styles.list__item}>
            <div className={styles.list__title}>
              {/* <p>{dishList[0].product_category}</p> */}
              <p>{dishList[0].product_category}</p>
            </div>
            {dishList.map((p) => (
              <DishCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        <BasketList />
      </div>
      <Footer />
    </>
  );
}

export default CatalogListSections;
