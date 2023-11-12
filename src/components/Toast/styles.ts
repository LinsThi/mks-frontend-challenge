import styled, { DefaultTheme, css, keyframes } from "styled-components";

import IconSVG from "../IconSVG";
import { TypeMessageToastProps } from "./@types";

type ContainerProps = {
  $typeMessage: TypeMessageToastProps;
  $shouldHide: boolean;
};

type NameToastProps = {
  $typeMessage: TypeMessageToastProps;
};

type TimerProps = NameToastProps;

function returnBgColor(type: TypeMessageToastProps, theme: DefaultTheme) {
  if (type === "success") return theme.COLORS.GREEN_PRIMARY;

  return theme.COLORS.ERROR_PRIMARY;
}

function returnTextColor(type: TypeMessageToastProps, theme: DefaultTheme) {
  if (type === "success") return theme.COLORS.BLACK;

  return theme.COLORS.MAIN;
}

function returnTimerColor(type: TypeMessageToastProps, theme: DefaultTheme) {
  if (type === "success") return theme.COLORS.GREEN_SECONDARY;

  return theme.COLORS.ERROR_SECONDARY;
}

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 20px;
  right: 20px;
  width: 213px;
  height: 100px;

  animation: ${slideIn} 1s ease forwards;

  background-color: ${({ $typeMessage, theme }) =>
    returnBgColor($typeMessage, theme)};
  border-radius: 10px;
  padding: 0 10px 0 10px;

  ${({ $shouldHide }) =>
    $shouldHide &&
    css`
      animation: ${slideOut} 1s ease forwards;
    `}
`;

export const ContentToast = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 90%;
  padding-right: 10px;
`;

export const IconToast = styled(IconSVG).attrs(() => {
  return {
    size: 30,
  };
})``;

export const MessageToast = styled.span<NameToastProps>`
  font-size: 13px;
  font-weight: 800;
  color: ${({ $typeMessage, theme }) => returnTextColor($typeMessage, theme)};
`;

export const ButtonCloseToast = styled.button`
  position: absolute;
  top: 3px;
  right: 0;

  border: none;
  background-color: transparent;
  font-size: 15px;
`;

const shrinkWidth = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const Timer = styled.div<TimerProps>`
  width: 100%;
  height: 4px;
  background-color: ${({ $typeMessage, theme }) =>
    returnTimerColor($typeMessage, theme)};
  border-radius: 10px;

  animation: ${shrinkWidth} 3s linear forwards;
  margin-bottom: 10px;
`;
