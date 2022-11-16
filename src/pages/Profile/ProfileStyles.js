import styled from "styled-components";

export const ProfileWrapper = styled.section`
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileCard = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    align-items: center;
    
    h3 {
        color: #02b3ab;
    }

    button {
        margin-top: .5rem;
        padding: .3rem .5rem;
        background-color: #02b3ab;
        color: #FFF;
        border: 2px solid #02b3ab;
        transition: all .2s;

        :hover {
            background-color: #FFF;
            color: #02b3ab;
        }
    }

    img {
        border-radius: 50%;
        margin-right: 3rem;
        width: 6rem;
        height: 6rem;
        object-fit: cover;
    }
`