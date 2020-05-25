import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 200px;
  padding: 4em 60px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Text = styled.p`
  color: ${theme.color.primary};
  font-size: 1.5em;
  text-align: center;
`;
