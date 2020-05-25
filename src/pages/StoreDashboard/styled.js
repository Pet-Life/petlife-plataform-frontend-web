import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${theme.color.quinary};
`;

export const TableTr = styled.tr`
  &:hover {
    background: ${theme.color.quinary};
  }

  &:nth-child() {
    background: ${theme.color.eighth};
  }
`;

export const TableTh = styled.th`
  padding: 1em;
  background: ${theme.color.primary};
  color: ${theme.color.secondary};
  border: 1px solid ${theme.color.quinary};
  text-align: left;
`;

export const TableTd = styled.td`
  padding: 1em;
  border: 1px solid ${theme.color.quinary};
`;
