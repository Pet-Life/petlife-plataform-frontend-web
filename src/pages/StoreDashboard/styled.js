import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  max-width: 100%;
  border-collapse: collapse;
  border: 1px solid ${theme.color.quinary};
  table-layout: fixed;
`;

export const TableTbody = styled.tbody``;

export const TableTr = styled.tr`
  font-size: 15px;
  word-wrap: break-word;
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
  word-wrap: break-word;
`;

export const TableTd = styled.td`
  padding: 1em;
  font-size: 15px;
  border: 1px solid ${theme.color.quinary};
  word-wrap: break-word;
  white-space: unset;
`;

export const ButtonRemove = styled.button`
  margin-bottom: 0.5em;
  width: 100%;
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

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
`;
