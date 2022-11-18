import React from "react";
import { CardItem } from "./MisOrdenesStyles";

import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CardOrdenes = ({ createdAt, status, total, id }) => {
  const navigate = useNavigate();

  const createOrderAt = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();

  return (
    <CardItem onClick={() => navigate(`/resumen/${id}`)}>
      <h4>ID de la orden: #{id.slice(0, 7)}</h4>
      <p>
        Pedido el fecha{" "}
        {new Intl.DateTimeFormat("es-AR", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(createOrderAt)}
      </p>
      <h5>Precio: ${total}</h5>
    </CardItem>
  );
};

export default CardOrdenes;
