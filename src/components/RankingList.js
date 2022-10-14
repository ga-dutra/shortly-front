import styled from "styled-components";

export default function RankingList({ name, linksCount, visitCount, index }) {
  return (
    <Wrapper>
      <RankingWrapper index={index}>
        <Position>{index}</Position>
        <List>
          <li>
            {name} - {linksCount} links - {visitCount} visualizações
          </li>
        </List>
      </RankingWrapper>
    </Wrapper>
  );
}

const colorByIndex = {
  1: "#FF6F50",
  2: "#FFE750",
  3: "#C2FF50",
  4: "#50FF72",
  5: "#50FFDD",
  6: "#606F66",
  7: "#50A2FF",
  8: "#C250FF",
  9: "#FF508A",
  10: "#6F6560",
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 50px;
`;

const RankingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => colorByIndex[props.index]};
  width: 80vw;
  height: auto;
  padding: 20px 0;
  box-shadow: 2px 4px 12px lightgray;
  border-radius: 36px;
`;

const List = styled.ul`
  list-style: none;
  li {
    padding: 6px 0;
    font-size: 21px;
  }
`;

const Position = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 32px;
  padding: 0 0 2px 0;
`;
