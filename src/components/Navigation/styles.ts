import styled from "styled-components";
import IconSVG from "../IconSVG";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #0f52ba;
  padding: 22px 40px;
  width: 100%;

  @media screen and (max-width: 376px) {
    padding: 22px 20px;
  }
`;

export const Logo = styled.label`
  display: flex;
`;

export const NameLogo = styled.h1`
  color: ${({ theme }) => theme.COLORS.MAIN};
  font-weight: 600;
  font-size: 40px;
`;

export const SubNameLogo = styled.h3`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.COLORS.MAIN};
  font-weight: 300;
  margin-left: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: ${({ theme }) => theme.COLORS.MAIN};
  border-radius: 8px;
  padding: 0 15px;
  height: 45px;
`;

export const Icon = styled(IconSVG)``;

export const QuantityItensInCart = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 18px;
`;
