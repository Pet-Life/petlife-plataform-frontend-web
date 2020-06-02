import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Table = styled.tbody`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${theme.color.quinary};
`;

export const TableTr = styled.tr`
  font-size: 15px;
  &:nth-child() {
    background: ${theme.color.eighth};
  }
`;

export const TableTh = styled.th`
  padding: 1em;
  background: ${theme.color.tertiary};
  color: ${theme.color.secondary};
  font-size: 15px;
  border: 1px solid ${theme.color.quinary};
  text-align: left;
`;

export const TableTd = styled.td`
  padding: 1em;
  font-size: 15px;
  border: 1px solid ${theme.color.quinary};
`;

export const ButtonRemove = styled.button`
  width: 70px;
  height: 35px;
  margin-left: 0.2em;
  background: ${theme.color.tertiary};
  color: ${theme.color.secondary};
  font-size: 15px;
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${theme.color.secondary};
    color: ${theme.color.tertiary};
  }
`;
