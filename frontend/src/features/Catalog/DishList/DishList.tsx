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
 * @var
 * @var dishCategory  выбранная категория блюд
 * @var dishList массив имеющихся блюд выбранной категории блюд
 * @returns возв комп-т Выбранной Категории Блюд и карт-ки блюд
 */
function CatalogListSections(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  // console.log(products);

  // ------------------------------ фильтр для отрисовки только одно КАТЕГОРИИ БЛЮД  // ------------------------------
  const params = useParams();
  // категория
  const dishCategory = products.find((el) => el.path === `/${params.path}`);
  // массив блюд выбранной категории
  const dishList = products.filter((el) => el.path === `/${params.path}`);

  return (
    <>
      <Header />
      <MenuProd />
      <div className={styles.list}>
        <div className={styles.list__contaner}>
          <div className={styles.list__title}>
            <p>{dishCategory?.product_category}</p>
          </div>
          <div className={styles.list__item}>
            {dishList?.map((p) => (
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
