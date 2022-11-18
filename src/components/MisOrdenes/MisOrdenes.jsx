import React, { useEffect } from "react";
import Loader from "../Loader/Loader"
import CardOrdenes from "./CardOrdenes"
import { MisOrdenesWrapper } from "./MisOrdenesStyles";

import { useSelector, useDispatch } from "react-redux";
import * as ordersActions from "../../redux/orders/orders-actions";
import { useNavigate } from "react-router-dom";

const MisOrdenes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, loading, error } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(ordersActions.getOrdersFail());
    } else {
      error && dispatch(ordersActions.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />;
  }

  if (error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <MisOrdenesWrapper>
      <h3>Mis Órdenes</h3>
      {orders?.length ? (
        orders.map(order => <CardOrdenes key={order.id} {...order} />)
      ) : (
        <h2>Que esperas para hacer tu primer pedido!!</h2>
      )}
    </MisOrdenesWrapper>
  );
};

export default MisOrdenes;
