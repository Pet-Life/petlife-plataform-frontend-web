import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    padding: 5px 15px;
  }
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: end;
`;

export const Link = styled.a`
  color: ${theme.color.primary};
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: ${theme.color.tertiary};
  }
`;

export const MainWrapper = styled.div`
  min-height: 300px;
  padding: 2.5em 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8em;
  justify-items: center;

  @media (max-width: 767px) {
    padding: 2.5em 15px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.2em;
  font-size: 1.2em;
  color: ${theme.color.primary};
  text-align: center;
`;
