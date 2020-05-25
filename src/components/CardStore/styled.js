import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StoreContent = styled.div`
  padding: 0.3em 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.4em;
`;

export const Title = styled.h2`
  font-size: 1.1em;
  color: ${theme.color.primary};
`;

export const StoreDetalh = styled.div`
  min-height: 80px;
  padding: 0.8em 0.3em;
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 0.4em;
  align-items: center;
`;

export const StoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.4em;
`;

export const StoreLogo = styled.img`
  width: 75px;
  height: auto;
`;

export const StoreName = styled.h3`
  color: ${theme.color.primary};
  font-size: 1em;
  text-align: left;
`;

export const StoreText = styled.p`
  font-size: 14px;
  color: ${theme.color.primary};
  line-height: 1.5em;
  text-align: left;
`;
