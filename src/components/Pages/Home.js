import Header from "../Header";
import Logo from "../Logo";
import UserLink from "../UserLink";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUserData } from "../../api/services";
import { UserContext } from "../../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [userLinks, setUserLinks] = useState([]);

  useEffect(() => {
    async function getUserLinks() {
      const response = await getUserData(userData.token);
      setUserLinks(response.data);
      setUserData({ ...userData, username: response.data.name });
    }
    getUserLinks();
  }, []);
  console.log(userLinks);

  return (
    <>
      <Header page={"home"}>
        <h1>
          Bem vindo(a), {userLinks.name ? <span>{userLinks.name}</span> : ""}
        </h1>
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
      {userData.username
        ? userLinks.shortenedUrls.map((item, index) => (
            <UserLink
              key={index}
              url={item.url}
              shortUrl={item.shortUrl}
              visitCount={item.visitCount}
            ></UserLink>
          ))
        : ""}
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
