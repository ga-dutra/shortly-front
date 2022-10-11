import styled from "styled-components";

export default function FormWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
  }

  input {
    width: 600px;
    height: 60px;
    background-color: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    padding-left: 20px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 20px;
  }

  button {
    width: 182px;
    height: 60px;
    margin-top: 40px;
    background-color: #5d9040;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    border: solid 0.1px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    cursor: pointer;
  }
`;
