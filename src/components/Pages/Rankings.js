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
  const { userData, setUserData, setUserLinks } = useContext(UserContext);
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    async function listRanking() {
      const response = await getRanking();
      setRanking(response.data);
    }
    listRanking();
  }, []);
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
            <h2
              onClick={() => {
                if (window.confirm("Tem certeza de que deseja sair?")) {
                  setUserData({});
                  setUserLinks([]);
                  navigate("/");
                }
              }}
            >
              Sair
            </h2>
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
        <Warning>Crie sua conta para usar nosso servi??o!</Warning>
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

const Warning = styled.h4`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  font-size: 24px;
  font-weight: 700;
`;
