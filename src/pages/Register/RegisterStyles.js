import styled from "styled-components";

export const RegisterWrapper = styled.div`
    margin: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: url("https://i.ibb.co/n7SYMq5/login-bg.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 110vh;
    }
`