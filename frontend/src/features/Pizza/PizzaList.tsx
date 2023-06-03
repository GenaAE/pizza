import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import MenuProd from '../MenuProd';
import Basket from './Basket';

import Pizza from './Pizza';
const piz = [
  {
    id: 1,
    name: 'Пицца Диавола',
    disc: 'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 2,
    name: 'Пицца Маргарита',
    disc: 'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
    img: '    https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/39396666-6336-4338-a434-636665653362.webp ',
    price: 300,
    massa: 300,
  },
  {
    id: 3,
    name: 'Пицца с цыплёнком ранч ',
    disc: 'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/33623438-3938-4964-b062-616232393064.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 1,
    name: 'Пицца Диавола',
    disc: 'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 2,
    name: 'Пицца Маргарита',
    disc: 'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
    img: '    https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/39396666-6336-4338-a434-636665653362.webp ',
    price: 300,
    massa: 300,
  },
  {
    id: 3,
    name: 'Пицца с цыплёнком ранч ',
    disc: 'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/33623438-3938-4964-b062-616232393064.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 1,
    name: 'Пицца Диавола',
    disc: 'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 2,
    name: 'Пицца Маргарита',
    disc: 'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
    img: '    https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/39396666-6336-4338-a434-636665653362.webp ',
    price: 300,
    massa: 300,
  },
  {
    id: 3,
    name: 'Пицца с цыплёнком ранч ',
    disc: 'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/33623438-3938-4964-b062-616232393064.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 1,
    name: 'Пицца Диавола',
    disc: 'Пепперони, масло острое, соус томатный, тесто для пиццы, сыр моцарелла',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/66343735-6337-4636-b338-376164616464.webp',
    price: 300,
    massa: 300,
  },
  {
    id: 2,
    name: 'Пицца Маргарита',
    disc: 'Соус песто, томаты черри, соус томатный, тесто для пиццы, сыр моцарелла',
    img: '    https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/39396666-6336-4338-a434-636665653362.webp ',
    price: 300,
    massa: 300,
  },
  {
    id: 3,
    name: 'Пицца с цыплёнком ранч ',
    disc: 'Моцарелла, филе куриное, бекон, соус ранч (соус маскарпоне, майонез, петрушка, лук зеленый, чеснок, соль), тесто для пиццы, соус сырный',
    img: 'https://static.yamiyami.ru/assets/images/resize/product/desktop/preview/33623438-3938-4964-b062-616232393064.webp',
    price: 300,
    massa: 300,
  },
];

function PizzaList(): JSX.Element {
  return (
    <>
      {/* ХЗ как сделать отрисовку всех комп в одной коробке?? */}
      <div className="list">
        {/* <div className="header"> */}
        <Header />
        {/* </div> */}
        {/* <div className="menu-prod"> */}
        <MenuProd />
        {/* </div> */}
        {/* <div className="basket"> */}
        <Basket />
        {/* </div> */}
        {/* <Header />
      <MenuProd />
      <Basket /> */}
        <div className="contaner-list">
          <div className="list__title">
            <h1>Pizza</h1>
            <p>Вкуснейшая пицца, которую можно купить за деньги на земле!</p>
          </div>
          <div className="list__item">
            {piz.map((p) => (
              <Pizza key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaList;
