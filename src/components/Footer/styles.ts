import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding: 10px 0;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

export const FooterText = styled.span`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 12px;
`;
