import styled from "styled-components";
import IconSVG from "../../components/IconSVG";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 83vh;
`;

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px;
  margin: 50px;
`;

export const Product = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const ImageProduct = styled.img`
  width: 100%;

  mix-blend-mode: multiply;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const InfoInSameLine = styled.div`
  display: flex;
`;

export const NameProduct = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  display: flex;
  flex: 1;
`;

export const InformationProduct = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;

  margin: 15px 0 10px;
`;

export const ValueProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 40px;

  background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  border-radius: 8px;
`;

export const TextValueProduct = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;

  color: ${({ theme }) => theme.COLORS.MAIN};
`;

export const ButtonBuy = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 100%;
  padding: 5px 20px;
  border-radius: 0 0 8px 8px;
`;

export const IconButton = styled(IconSVG)``;

export const ButtonTitle = styled.span`
  color: ${({ theme }) => theme.COLORS.MAIN};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;
