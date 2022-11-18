import styled from "styled-components";

export const ResumenWrapper = styled.section`
  width: 100%;
  padding: 2rem;
  min-height: calc(100vh - 100px);
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 100%;
    color: #02b3ab;
    text-shadow: 0 0 .5rem #02b3ab;
    text-align: center;
  }

  a {
    margin: 1rem 0;
    background-color: #cf0281;
    color: #FFF;
    padding: .3rem 1rem;
    border: 2px solid #cf0281;
    text-decoration: none;
    transition: all .3s;

    :hover {
      background-color: #FFF;
      color: #cf0281;
      cursor: pointer;
    }
  }

  .title {
    margin-top: 2rem;
    color: #FFF;
    font-size: 2rem;
  }

  .line {
    width: 80%;
    height: 2px;
    margin: 1rem 0;
    background-color: #02b3ab;
    box-shadow: 0 0 .5rem 0 #02b3ab;
  }
`;

export const ProductResumen = styled.div`
width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }

    img {
        width: 10%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    h4 {
        color: #FFF;
    }

    div {
        width: 10%;
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            width: 30%;
        }

    }
    p {
        color: #FFF;
    }
`
