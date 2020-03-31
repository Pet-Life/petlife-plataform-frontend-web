import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkMenu = styled.a`
  margin-right: 2.1875em;
  font-size: 1em;
  color: ${theme.colorPrimary};

  &:last-child {
    margin-right: 0;
    padding: 10px 40px;
    font-size: 1.125em;
    color: ${theme.colorTertiary};
    border: 2px solid #219653;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      background: ${theme.colorTertiary};
      color: ${theme.colorSecondary};
    }
  }

  @media (max-width: 952px) {
    display: none;
  }
`;
