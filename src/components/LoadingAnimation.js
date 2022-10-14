import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
export default function LoadingAnimation() {
  return (
    <LoadingAnimationWrapper>
      <ThreeDots
        height="50"
        width="250"
        radius="9"
        color="lightblue"
        ariaLabel="three-dots-loading"
      />
    </LoadingAnimationWrapper>
  );
}

const LoadingAnimationWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-top: 80px;
`;
