import styled from "styled-components";

export default function Header({ children, page }) {
  return <HeaderWrapper page={page}>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  width: 94vw;
  display: flex;
  justify-content: end;
  margin: 30px 0;

  h1 {
    position: fixed;
    left: 20px;
  }

  p,
  h2,
  h3 {
    font-size: 16px;
    margin-right: 15px;
    cursor: pointer;
    color: #9c9c9c;
  }
  p:nth-child(1) {
    color: ${(props) => (props.page === "signup" ? "#9C9C9C" : "#5D9040")};
  }
  p:nth-child(2) {
    color: ${(props) => (props.page === "signin" ? "#9C9C9C" : "#5D9040")};
  }
  h2:nth-child(2) {
    color: ${(props) => (props.page === "home" ? "#5D9040" : "#9C9C9C")};
  }
  h2:nth-child(3) {
    color: ${(props) => (props.page === "rankings" ? "#5D9040" : "#9C9C9C")};
  }
`;
