import styled from "styled-components";

export default function RankingList() {
  return (
    <Wrapper>
      <RankingWrapper>
        <ul>
          <li>Fulano - 32 links - 1.072.321 vizualizações</li>
          <li>Ciclano - 25 links - 1.011.090 vizualizações</li>
        </ul>
      </RankingWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 50px;
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
  ul {
    list-style: decimal;
  }

  li {
    padding: 6px 0;
    font-size: 20px;
  }
`;
