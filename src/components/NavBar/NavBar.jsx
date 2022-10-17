import React, { useState } from "react";
import { NavBarWrapper } from "./NavBarStyles";
import { Link } from "react-router-dom";

import BurgerButton from "./BurgerButton/BurgerButton";
import BgDiv from "./BgDiv/BgDiv";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

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
          <img
            src={require("./NavImg/logo.png")}
            alt="logo"
            style={{ height: "100%", marginRight: "1rem" }}
          />
          <h2>ASTROGAMES</h2>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv clicked={clicked}>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
          <Link onClick={handleClick} to="/products">
            Products
          </Link>
        </BgDiv>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
