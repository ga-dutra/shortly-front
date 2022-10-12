import Logo from "../Logo";
import Header from "../Header";
import RankingList from "../RankingList";
import trophy from "../../assets/img/trophy.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Rankings() {
  const navigate = useNavigate();
  return (
    <>
      <Header page={"rankings"}>
        <h1>Bem vindo, pessoa</h1>
        <h2 onClick={() => navigate("/home")}>Home</h2>
        <h2>Ranking</h2>
        <h2>Sair</h2>
      </Header>
      <Logo></Logo>
      <TrophyWrapper>
        <img src={trophy} alt="Trophy" />
        <h1>Ranking</h1>
      </TrophyWrapper>
      <RankingList></RankingList>
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
