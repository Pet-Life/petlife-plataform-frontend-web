import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardWrapper = styled.div`
  width: 220px;
  height: 220px;
  margin-bottom: 0.8em;
  padding: 0.2em 0.4em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

export const CardTitle = styled.h2`
  margin: 0.6em 0;
  font-size: 0.96em;
  color: ${theme.colorPrimary};
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${theme.colorPrimary};
`;
