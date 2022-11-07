import React from "react";
import Producto from "./Producto";
import { ProductosLayout } from "./ProductosStyles";
import {useSelector} from 'react-redux'

const Productos = () => {
  const Products = useSelector(state => state.products.products)
  return (
    <ProductosLayout>
      {Products.map(product => (
        <Producto key={product.id} {...product}/>
      ))}
    </ProductosLayout>
  );
};

export default Productos;
