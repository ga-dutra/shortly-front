import styled from "styled-components";

export default function UserLink({ url, shortUrl, visitCount }) {
  return (
    <Wrapper>
      <ContentWrapper>
        <p>
          {url.slice(0, 25)}
          {url[25] ? "..." : ""}
        </p>
        <p>{shortUrl}</p>
        <p>Quantidade de visitantes: {visitCount}</p>
      </ContentWrapper>
      <IconWrapper>
        <ion-icon name="trash"></ion-icon>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  width: calc(0.8 * 832px);
  background-color: #80cc74;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px 0px 0px 12px;
  border: 1px solid #78b15940;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const IconWrapper = styled.div`
  width: calc(0.2 * 832px);
  margin-right: 70px;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: 1px solid #78b15940;
  display: flex;
  align-items: center;
  justify-content: center;
  ion-icon {
    font-size: 28px;
    color: #ea4f4f;
  }
`;
