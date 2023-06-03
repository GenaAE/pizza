import React from 'react';
import Header from './features/Header';
import Menu from './features/Menu';

function Home(): JSX.Element {
  return (
    <>
      <Header />

      <Menu />
      <div>Home</div>
      <h1>Сюда основное</h1>
    </>
  );
}

export default Home;
