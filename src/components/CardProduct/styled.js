import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Grade } from "@styled-icons/material";

export const CardWrapper = styled.div`
  width: 220px;
  margin-bottom: 0.8em;
  padding: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a``;

export const Photo = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  margin: 0 auto;
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
  color: ${theme.colorSeventh};
`;

export const CardTitle = styled.h2`
  margin: 0 0 1em 0;
  font-size: 14px;
  color: #3c3b3b;
  line-height: 1.2em;
`;

export const Span = styled.span`
  font-size: 1em;
  color: ${theme.colorPrimary};
`;
