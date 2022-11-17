import React, { useEffect } from "react";
import { MisOrdenesWrapper } from "./MisOrdenesStyles";

import { useSelector, useDispatch } from "react-redux";
import * as ordersActions from "../../redux/orders/orders-actions";
import { useNavigate } from "react-router-dom";

const MisOrdenes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  
  return (
    <MisOrdenesWrapper>
      <h3>Mis Órdenes</h3>
    </MisOrdenesWrapper>
  );
};

export default MisOrdenes;
