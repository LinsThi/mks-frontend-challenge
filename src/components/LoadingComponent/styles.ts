import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 83vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s linear infinite;
`;
