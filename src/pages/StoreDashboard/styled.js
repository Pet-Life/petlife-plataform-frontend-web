import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${theme.colorQuinary};
`;

export const TableTr = styled.tr`
  &:hover {
    background: ${theme.colorQuinary};
  }

  &:nth-child() {
    background: ${theme.colorEighth};
  }
`;

export const TableTh = styled.th`
  padding: 1em;
  background: ${theme.colorPrimary};
  color: ${theme.colorSecondary};
  border: 1px solid ${theme.colorQuinary};
  text-align: left;
`;

export const TableTd = styled.td`
  padding: 1em;
  border: 1px solid ${theme.colorQuinary};
`;
