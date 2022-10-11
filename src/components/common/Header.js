import styled from "styled-components";

export default function Header({ children, page }) {
  return <HeaderWrapper page={page}>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  width: 90vw;
  display: flex;
  justify-content: end;
  margin: 30px 0;
  p {
    font-size: 16px;
    margin-right: 15px;
    cursor: pointer;
  }
  p:nth-child(1) {
    color: ${(props) => (props.page === "signup" ? "#9C9C9C" : "#5D9040")};
  }
  p:nth-child(2) {
    color: ${(props) => (props.page === "signin" ? "#9C9C9C" : "#5D9040")};
  }
`;
