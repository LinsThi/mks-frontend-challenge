import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding: 10px 0;
`;

export const FooterText = styled.span`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 12px;
`;
