import React from "react";
import { ProductoCard } from "./ProductosStyles";

const Producto = ({ name, price, img, category }) => {
  return (
    <ProductoCard>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <button>Comprar</button>
    </ProductoCard>
  );
};

export default Producto;
