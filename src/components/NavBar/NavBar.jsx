import React, { useState } from "react";
import { NavBarWrapper } from "./NavBarStyles";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsCart4 } from 'react-icons/bs';

import BurgerButton from "./BurgerButton/BurgerButton";
import BgDiv from "./BgDiv/BgDiv";

import { useSelector } from 'react-redux';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  let width = window.screen.width;

  const currentUser = useSelector(state => state.user.currentUser);

  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavBarWrapper>
        <div
          style={{
            height: "100%",
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to='/' style={{ height: "100%"}}>
            <img
              src="https://i.ibb.co/wJvrTB6/logo.png"
              alt="logo"
              style={{ height: "100%", marginRight: "1rem" }}
            />
          </Link>
          <h2>ASTROGAMES</h2>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          {width > 768 ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/products">Productos</Link>
              <Link to={currentUser ? "/" : "/login"}>
                <BsFillPersonFill style={{marginRight:'.5rem', fontSize:'1.5rem'}} />
                {currentUser ? `${currentUser.displayName}` : "Iniciar Sesión"}
              </Link>
              <Link to="/cart"><BsCart4 style={{marginRight:'.5rem', fontSize:'1.5rem'}}/><div className="cart">{totalCartItems}</div> Carrito</Link>
            </>
          ) : (
            <>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
              <Link to="/products" onClick={handleClick}>
                Productos
              </Link>
              <Link to={currentUser ? "/" : "/login"} onClick={handleClick}><BsFillPersonFill style={{marginRight:'.5rem'}} />{currentUser ? `${currentUser.displayName}` : "Iniciar Sesión"}</Link>
              <Link to="/cart" onClick={handleClick}><BsCart4 style={{marginRight:'.5rem'}}/><div className="cart">{totalCartItems}</div> Carrito</Link>
            </>
          )}
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavBarWrapper>
      <BgDiv clicked={clicked} />
    </>
  );
};

export default NavBar;
