import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
  background: ${theme.color.secondary};
  font-size: 1.125em;
  color: ${theme.color.tertiary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${theme.color.tertiary};
    color: ${theme.color.secondary};
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
