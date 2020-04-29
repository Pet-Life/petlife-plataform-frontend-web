import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const LayoutContent = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-gap: 0.5em;
`;

export const LayoutMain = styled.main`
  background: ${theme.colorSecondary};
  padding: 2em 1.5em;
`;
