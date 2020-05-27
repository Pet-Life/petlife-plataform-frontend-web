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

export const List = styled.ul`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const ListItem = styled.li`
  margin-bottom: 1em;
  padding-bottom: 1em;
  font-size: 14px;
  color: ${theme.color.primary};
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Header = styled.img`
  width: 100px;
  height: 100px;
`;
