import React from 'react';
import { Product } from './Catalog/types/ProductType';

function Basket({ name }: { name: string }): JSX.Element {
  // const menuProd_Nav = Array.from(new Set(name));

  return (
    <>
      <p>{name}</p>
      <div className="basket">Basket</div>;
    </>
  );
}

export default Basket;
