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
  max-width: 600px;
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
  grid-template-columns: auto auto auto;

  align-items: center;
`;

export const Header = styled.img`
  width: 85px;
  height: 85px;
`;

export const SpanTitle = styled.span`
  color: ${theme.color.primary};
  font-size: 1.3em;
  line-height: 1em;
`;

export const ButtonRemove = styled.button`
  width: 100px;
  height: 36px;
  color: ${theme.color.secondary};
  font-size: 1em;
  background: ${theme.color.tertiary};
  border: 1px solid ${theme.color.tertiary};
  border-radius: 4px;
`;
