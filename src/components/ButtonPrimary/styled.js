import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  background: ${(props) =>
    props.primary ? `${theme.color.secondary}` : `${theme.color.tertiary}`};
  color: ${(props) =>
    props.primary ? `${theme.color.tertiary}` : `${theme.color.secondary}`};
  font-size: 1em;
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      props.primary ? `${theme.color.tertiary}` : `${theme.color.secondary}`};
    color: ${(props) =>
      props.primary ? `${theme.color.secondary}` : `${theme.color.tertiary}`};
  }

  @media (max-width: 952px) {
    width: 100%;
  }
`;
