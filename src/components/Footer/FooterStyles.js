import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #000;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
            height: calc(100vh - 100px);
        }
    
    iframe {
        width: 30%;
        height: 12rem;
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    img {
        height: 5rem;
        @media (max-width: 768px) {
            margin-top: 2rem;
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    p {
        margin: 1rem 0;
        color: #FFF;
        text-align: center;
        display: inline;

        a {
            color: #cf0281;
        }
    }
    
    .info {
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    
    .icons {
        width: 22%;
        padding: 2rem;
        justify-content: space-between;
        @media (max-width: 768px) {
            width: 70%;
        }
    }
`