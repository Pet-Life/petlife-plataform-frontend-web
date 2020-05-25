import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Grade } from "@styled-icons/material";

export const CardWrapper = styled.div`
  width: 220px;
  padding: 1em;
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;

export const Link = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
`;

export const Photo = styled.img`
  width: 140px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
`;

export const StartWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  grid-column-gap: 0.4em;
  grid-template-columns: auto auto auto auto auto;
`;

export const StartIcon = styled(Grade)`
  width: 20px;
  height: 20px;
  color: ${theme.color.seventh};
`;

export const CardTitle = styled.h2`
  margin: 0 0 1em 0;
  font-size: 14px;
  color: ${theme.color.primary};
  line-height: 1.2em;
`;

export const Span = styled.span`
  font-size: 1em;
  color: ${theme.color.primary};
`;

export const Empty = styled.div``;

export const EmptyText = styled.p`
  color: ${theme.color.primary};
  font-size: 1.5em;
  font-weight: bold;
`;
