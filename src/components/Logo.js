import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="Shortly Logo" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;
