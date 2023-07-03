import React from 'react';
import Header from './features/Header';

import CatalogHome from './features/Catalog/CatalogHome';
import Basket from './features/Basket';

function Home(): JSX.Element {
  return (
    <>
      <Header />

      <CatalogHome />

      <div>Home</div>
      <h1>Сюда основное</h1>
    </>
  );
}

export default Home;
