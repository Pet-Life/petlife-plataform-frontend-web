import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkMenu = styled.a`
  margin-right: 2.1875em;
  font-size: 1em;
  color: ${theme.color.primary};
  transition: all 0.6s;

  &:hover {
    color: ${theme.color.tertiary};
  }

  &:last-child {
    margin-right: 0;
    padding: 10px 40px;
    font-size: 1.125em;
    color: ${theme.color.tertiary};
    border: 2px solid ${theme.color.tertiary};
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.6s;

    &:hover {
      background: ${theme.color.tertiary};
      color: ${theme.color.secondary};
    }
  }

  @media (max-width: 952px) {
    display: none;
  }
`;
