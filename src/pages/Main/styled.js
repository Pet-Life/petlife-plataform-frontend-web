import styled from "styled-components";

export const SectionMain = styled.section`
  padding: 30px 60px;
  display: flex;

  @media (max-width: 767px) {
    padding: 30px 15px;
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
