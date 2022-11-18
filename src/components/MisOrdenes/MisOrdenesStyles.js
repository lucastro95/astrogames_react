import styled from "styled-components";

export const MisOrdenesWrapper = styled.div`
width: 100%;
margin-top: 3rem;
padding: 0 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}


h3 {
    width: 100%;
    color: #cf0281;
    text-align: center;
}
`

export const CardItem = styled.div`
    width: 30%;
    margin: 1rem;
    border: 2px solid #cf0281;
    box-shadow: 0 0 0.5rem 0 #cf0281;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 80%;
    }

    h4 {
        color: #02b3ab;
        margin: 1rem 0;
        font-size: 1.3rem;
    }

    p {
        margin: .5rem 0;
        color: #CFCFCF70;
        font-size: .9rem;
    }

    h5 {
        margin: .5rem 0;
        color: #FFF;
    }
`