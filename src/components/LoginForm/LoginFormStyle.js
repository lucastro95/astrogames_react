import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  height: 75vh;
  width: 30%;
  padding: 2rem;
  background: rgba(20, 223, 223, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(20, 223, 223, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
      width: 80%;
    } 

  h3 {
    font-size: 1.5rem;
    color: #cf0281;
    margin-bottom: 3rem;
  }

  p {
    color: #FFFFFF;
  }

  .google {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: .3rem .5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .form-btn {
    margin-top: 1rem;
    padding: .3rem .5rem;
    background-color: #cf0281;
    color: #FFFFFF;
    border: none;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 .5rem 0 #cf0281;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 80%;
        margin-top: 1rem;
        padding: .3rem .5rem;
        background-color: transparent;
        border: 2px solid #cf0281;
        box-shadow: 0 0 .5rem 0 #cf0281;

        &::placeholder {
            color: #FFFFFF;
        }
    }
  }
`;
