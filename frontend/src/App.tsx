import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Layout from './Layout';
import DishList from './features/Catalog/DishList/DishList';
import DishPage from './features/Catalog/DishList/DishPage/DishPage';
import { getProducts } from './features/Catalog/productSlice';
import { useAppDispatch } from './store/store';
import AdminWork from './features/Admin/AdminWork';
import { getProductsAdmin } from './features/Admin/adminSlice';
import PelmeniList from './features/Catalog/Pelmeni/PelmeniList';
import { getPelmeni } from './features/Catalog/Pelmeni/pelmeniSlice';
import CatalogDishes from './features/Catalog/CatalogDishes/CatalogDishes';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsAdmin());
    dispatch(getPelmeni());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/pelmeni" element={<PelmeniList />} />

          <Route path="/admin" element={<AdminWork />} />
          <Route path="/catalog/" element={<CatalogDishes />} />
          <Route path="/catalog/:path" element={<DishList />} />
          <Route path="/catalog/:path/:id" element={<DishPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
