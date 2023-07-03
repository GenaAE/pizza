import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Layout from './Layout';
import DishList from './features/Catalog/DishList';
import Section from './features/Catalog/DishCard';
import DishPage from './features/Catalog/DishPage';
import CatalogHome from './features/Catalog/CatalogHome';
import Proba from './features/Catalog/Proba';
import { useDispatch } from 'react-redux';
import { getProducts } from './features/Catalog/productSlice';
import { useAppDispatch } from './store';
import AdminWork from './features/Admin/AdminWork';
import {
  addProduct,
  deleteProduct,
  getProductsAdmin,
} from './features/Admin/adminSlice';
import PelmeniList from './features/Catalog/Pelmeni/PelmeniList';
import { getPelmeni } from './features/Catalog/Pelmeni/pelmeniSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsAdmin());
    dispatch(getPelmeni());

    // dispatch(deleteProduct());
    // dispatch(Product());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/pelmeni" element={<PelmeniList />} />
          <Route path="/admin" element={<AdminWork />} />
          <Route path="/catalog/" element={<CatalogHome />} />
          <Route path="/catalog/:path" element={<DishList />} />
          <Route path="/catalog/:path/:id" element={<DishPage />} />
          <Route path="/proba" element={<Proba />} />
          {/* <Route path="/products" element={<CatalogListSections />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
