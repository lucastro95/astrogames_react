import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as ordersActions from "../../redux/orders/orders-actions";
import { ResumenWrapper } from "./ResumenStyles";
import ResumenItem from "./ResumenItem";

const Resumen = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }
    setVisitedOrder(orders?.find((order) => order.id === orderId));
  }, [orderId, currentUser?.id, orders, dispatch]);

  console.log(visitedOrder);
  return (
    <ResumenWrapper>
      <h3>Resumen de la Órden: #{visitedOrder?.id.slice(0, 7)}</h3>
      <div className="line"></div>
      <h4 className="title">Tus Productos:</h4>
      {visitedOrder?.items.map((item) => (
        <>
          <ResumenItem key={item.id} {...item} />
          <div
            key={Date.now()}
            className="line"
            style={{ width: "100%" }}
          ></div>
        </>
      ))}
      <Link to="/profile">Volver</Link>
    </ResumenWrapper>
  );
};

export default Resumen;
