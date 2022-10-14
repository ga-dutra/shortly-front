import Logo from "../Logo";
import Header from "../Header";
import RankingList from "../RankingList";
import LoadingAnimation from "../LoadingAnimation";
import trophy from "../../assets/img/trophy.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getRanking } from "../../api/services";
import { UserContext } from "../../contexts/UserContext";

export default function Rankings() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    async function listRanking() {
      const response = await getRanking();
      setRanking(response.data);
    }
    listRanking();
  }, []);
  console.log(ranking);
  console.log(userData);
  return (
    <>
      <Header page={"rankings"}>
        {userData.username ? (
          <>
            <h1>
              Bem vindo(a),{" "}
              {userData.username ? <span>{userData.username}</span> : ""}
            </h1>
            <h2 onClick={() => navigate("/home")}>Home</h2>
            <h2>Ranking</h2>
            <h2>Sair</h2>
          </>
        ) : (
          <>
            <h3 onClick={() => navigate("/sign-in")}>Entrar</h3>
            <h3 onClick={() => navigate("/sign-up")}>Cadastrar-se</h3>
          </>
        )}
      </Header>
      <Logo></Logo>
      <TrophyWrapper>
        <img src={trophy} alt="Trophy" />
        <h1>Ranking</h1>
      </TrophyWrapper>

      {ranking[0] ? (
        ranking.map((item, index) => (
          <RankingList
            key={index}
            index={index + 1}
            name={item.name}
            linksCount={item.linksCount}
            visitCount={item.visitCount}
          ></RankingList>
        ))
      ) : (
        <LoadingAnimation></LoadingAnimation>
      )}

      {userData.username ? (
        ""
      ) : (
        <Warning>Crie sua conta para usar nosso serviço!</Warning>
      )}
    </>
  );
}

const TrophyWrapper = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 28px;
    margin-left: 14px;
  }
`;
const RankingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  width: 80vw;
  height: auto;
  padding: 20px 0;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
`;

const Warning = styled.h4`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  font-size: 24px;
  font-weight: 700;
`;
