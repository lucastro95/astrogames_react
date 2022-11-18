import React from "react";
import { ProductResumen } from "./ResumenStyles";

const ResumenItem = ({ name, quantity, img, price }) => {
  return (
    <ProductResumen>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>
        {quantity}u. ${price}
      </p>
    </ProductResumen>
  );
};

export default ResumenItem;
