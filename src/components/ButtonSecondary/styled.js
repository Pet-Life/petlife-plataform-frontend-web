import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonStyles = styled.button`
  width: 15px;
  height: 40px;
  background: ${theme.colorTertiary};
  font-size: 1.125em;
  color: ${theme.colorTertiary};
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background: ${theme.colorTertiary};
    color: ${theme.colorSecondary};
  }
`;
