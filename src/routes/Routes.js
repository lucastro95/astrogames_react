import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
