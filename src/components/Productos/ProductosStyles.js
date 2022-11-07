import styled from "styled-components";

export const ProductosLayout = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;

`

export const ProductoCard = styled.div`
    width: 30%;
    height: auto;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cf028180;

    @media (max-width: 768px) {
        width: 80%;
    }

    img {
        width: 90%;
    }

    div {
        width: 100%;
        padding: .5rem;
        background-color: #02b3ab;
        color: #FFF;
    }

    button {
        width: 100%;
        padding: .3rem .5rem;
        background-color: #FFF;
        color: #cf0281;
        border: none;
        transition: all .3s;

        &:hover {
            background-color: #cf0281;
            color: #FFF;
            cursor: pointer;
        }
    }
`