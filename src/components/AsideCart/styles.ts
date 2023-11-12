import styled, { keyframes } from "styled-components";

type ContainerProps = {
  isOpened: boolean;
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
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  width: 500px;

  padding: 50px 30px;
  display: ${({ isOpened }) => (isOpened ? "inline" : "none")};
  animation: 0.6s ${slideIn} ease-out;
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
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 58vh;

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
`;

export const ProductCart = styled.div`
  background-color: ${({ theme }) => theme.COLORS.MAIN};
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 10px;
  border-radius: 8px;
  position: relative;
`;

export const ImageProductCart = styled.img`
  mix-blend-mode: multiply;

  width: 100px;
`;

export const NameProductCart = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;

  width: 120px;
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

export const ValueProductCart = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  /* margin-top: 2vh; */

  color: ${({ theme }) => theme.COLORS.BLACK};
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
  top: -10%;
  right: -2%;
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
`;

export const TextTotal = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;

  color: ${({ theme }) => theme.COLORS.MAIN};
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
`;
