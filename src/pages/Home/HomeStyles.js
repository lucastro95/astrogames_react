import styled from "styled-components";
import img from "../../images/bg.jpg";

export const HomeWrapper = styled.section`
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 3rem 5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: -2;
  background: url(${img});
  background-size: cover;

  img {
    width: 40%;
  }
`;
