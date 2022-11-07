import { Routes as ReactDomRoutes, Route, Navigate } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";

function Routes() {
  let auth = true;
  return (
    <ReactDomRoutes>
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/checkout"
        element={auth ? <Checkout /> : <Navigate to="/" />}
      />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
