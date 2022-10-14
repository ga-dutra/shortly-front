import Header from "../Header";
import Logo from "../Logo";
import UserLink from "../UserLink";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRanking } from "../../api/services";

export default function Home() {
  const navigate = useNavigate();
  let ranking;
  useEffect(() => {
    async function listRanking() {
      console.log("deveria ter tentado");
      ranking = await getRanking();
    }
    listRanking();
    console.log(ranking);
  }, []);
  console.log(ranking);
  return (
    <>
      <Header page={"home"}>
        <h1>Bem vindo, pessoa</h1>
        <h2>Home</h2>
        <h2 onClick={() => navigate("/rankings")}>Ranking</h2>
        <h2>Sair</h2>
      </Header>
      <Logo></Logo>
      <InputWrapper>
        <input
          placeholder="Insira o link que deseja encurtar"
          type="text"
        ></input>
        <button>Encurtar Link</button>
      </InputWrapper>
      <UserLink></UserLink>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95vw;
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
    margin-right: 50px;
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
