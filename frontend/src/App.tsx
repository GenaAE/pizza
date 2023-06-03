import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Layout from './Layout';
import PizzaList from './features/Pizza/PizzaList';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<PizzaList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
