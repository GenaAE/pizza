import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import DishCard from '../Catalog/DishList/DishCard/DishCard';
import AddForm from './AddForm';
import { addProduct, deleteProduct, getProductsAdmin } from './adminSlice';
import ProductCard from './ProductCard';

function AdminWork(): JSX.Element {
  const products = useSelector(
    (store: RootState) => store.adminProduct.adminProduct
  );
  console.log(products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAdmin());
  }, [dispatch]);
  return (
    <>
      <div className="ad">
        <AddForm />
        {products.map((dish) => (
          <ProductCard key={dish.id} dish={dish} />
        ))}
      </div>
    </>
  );
}

export default AdminWork;
