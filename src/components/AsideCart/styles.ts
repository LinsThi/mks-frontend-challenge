import styled, { keyframes } from "styled-components";

type ContainerProps = {
  $isOpened: boolean;
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  padding: 50px 30px;
  display: ${({ $isOpened }) => ($isOpened ? "inline" : "none")};
  animation: 0.6s ${slideIn} ease-out;

  width: 470px;

  @media screen and (max-width: 520px) {
    width: 450px;
  }

  @media screen and (max-width: 499px) {
    width: 370px;
  }

  @media screen and (max-width: 376px) {
    width: 300px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.MAIN};

  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`;

export const ButtonClose = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 18px;

  padding: 5px;
`;

export const CloseIcon = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const ListCartProducts = styled.section`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 63vh;

  overflow: auto;
  overflow-x: hidden;
  padding: 10px 10px 0 0;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-horizontal {
    width: 0.4em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    border-radius: 6px;
  }

  @media screen and (max-width: 1215px) {
    margin-top: 0;
    height: 50vh;
  }
`;

export const ProductCart = styled.div`
  background-color: ${({ theme }) => theme.COLORS.MAIN};
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 10px;
  border-radius: 8px;
  position: relative;

  @media screen and (max-width: 499px) {
    flex-direction: column;
  }
`;

export const ImageProductCart = styled.img`
  mix-blend-mode: multiply;

  width: 70px;
  height: 70px;

  @media screen and (max-width: 520px) {
    width: 50px;
    height: 50px;
  }
`;

export const NameProductCart = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  width: 110px;

  @media screen and (max-width: 520px) {
    font-size: 14px;
    width: 100px;
  }
`;

export const QuantityProductInCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LabelQuantity = styled.label`
  font-size: 10px;
  font-weight: 400;
  line-height: 6px;
  letter-spacing: 0em;

  @media screen and (max-width: 499px) {
    display: none;
  }
`;

export const QuantityProduct = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 4px;
`;

export const ButtonQuantity = styled.button``;

export const TextButtonQuantity = styled.span`
  padding: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const TextQuantity = styled.span`
  padding: 8px;
  font-size: 14px;

  position: relative;

  &::before {
    content: "";
    width: 1px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY_SECONDARY};
    position: absolute;
    left: 0;
    top: 25%;
    bottom: 25%;
  }

  &::after {
    content: "";
    width: 1px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY_SECONDARY};
    position: absolute;
    right: 0;
    top: 25%;
    bottom: 25%;
  }
`;

export const QuantityAndValueProduct = styled.div`
  display: flex;
  gap: 20px;
`;

export const ValueProductCart = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;

  color: ${({ theme }) => theme.COLORS.BLACK};

  margin-top: 2vh;

  @media screen and (max-width: 499px) {
    margin-top: 0;
  }
`;

export const ButtonRemove = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 18px;

  padding: 5px;

  position: absolute;
  top: -5%;
  right: -2%;
  z-index: 1;
`;

export const TextButtonRemove = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const FooterAside = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 -30px;
`;

export const TotalValueProductsInCart = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 33px 30px;

  &:span {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.MAIN};
  }

  @media screen and (max-width: 499px) {
    margin: 33px 10px;
  }
`;

export const TextTotal = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;

  color: ${({ theme }) => theme.COLORS.MAIN};

  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`;

export const ButtonFinalizePurchase = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  height: 70px;
`;

export const TextButtonFinalizePurchase = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;

  color: ${({ theme }) => theme.COLORS.MAIN};

  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`;
