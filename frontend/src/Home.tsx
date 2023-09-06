import React, { useState } from 'react';
import Header from './features/Header/Header';

import CatalogHome from './features/Catalog/CatalogHome';
import Carusel from './Carusel';
import BasketList from './features/Basket/BasketList';

function Home(): JSX.Element {
  const [basket, setBasket] = useState(1);
  return (
    <>
      <div className="home">
        <Header />

        <Carusel />

        <CatalogHome />

        <div>Home</div>
        <h1>Сюда основное</h1>
      </div>
    </>
  );
}

export default Home;
