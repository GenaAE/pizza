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
              <p>
                СЛОГАН ДЛЯ КАЖДОЙ КАТЕГОРИИ = Вкуснейшее блюдо, которое можно
                купить за деньги на земле!
              </p>
            </div>
            {dishList.map((p) => (
              <DishCard key={p.id} p={p} />
            ))}
          </div>
        </div>
        {/* <div
          className="basket"
          style={{
            position: 'fixed',
            top: '75px',
            right: '0px',
            background: '#f3feff',
          }}
        >
        </div> */}
        <BasketList />
      </div>
      <Footer />
    </>
  );
}

export default CatalogListSections;
