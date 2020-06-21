import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SectionMain = styled.section`
  padding: 30px 60px;
  display: flex;

  @media (max-width: 767px) {
    padding: 1em;
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  margin-left: 0.4em;
  padding: 0 15px;
  display: grid;
  grid-column-gap: 0.5em;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 1.4em;
  color: ${theme.color.primary};
  line-height: 1.3em;
`;
