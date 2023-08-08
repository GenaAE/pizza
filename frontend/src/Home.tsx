import React from 'react';
import Header from './features/Header/Header';

import CatalogHome from './features/Catalog/CatalogHome';

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
