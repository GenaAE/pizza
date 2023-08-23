import React from 'react';
import Header from './features/Header/Header';

import CatalogHome from './features/Catalog/CatalogHome';
import Carusel from './Carusel';

function Home(): JSX.Element {
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
