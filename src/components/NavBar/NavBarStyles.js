import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  height: 100px;
  padding: 1.4rem;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 500;

  h2 {
    font-weight: 400;
    color: #fff;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin: auto;
    text-align: center;
    transition: all 0.6s ease;
    a {
      color: #fff;
      font-size: 2rem;
      display: block;
      transition: all .3s;
      &:hover{
        text-shadow: 0 0 0.8em #02b3ab;
    }
    }
    
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 40vh;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
    }
  }
`;
