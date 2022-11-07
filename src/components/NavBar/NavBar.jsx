import React, { useState } from "react";
import { NavBarWrapper } from "./NavBarStyles";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';

import BurgerButton from "./BurgerButton/BurgerButton";
import BgDiv from "./BgDiv/BgDiv";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  let width = window.screen.width;

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
              <Link to="/login"><BsFillPersonFill style={{marginRight:'.5rem'}} />Iniciar Sesión</Link>
            </>
          ) : (
            <>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
              <Link to="/products" onClick={handleClick}>
                Productos
              </Link>
              <Link to="/login" onClick={handleClick}><BsFillPersonFill style={{marginRight:'.5rem'}} />Iniciar Sesión</Link>
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
