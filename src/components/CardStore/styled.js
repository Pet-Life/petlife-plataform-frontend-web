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
  color: ${theme.colorPrimary};
`;

export const StoreDetalh = styled.div`
  padding: 0.8em 0.3em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 45px 1fr;
  grid-gap: 0.4em;
  align-items: center;
`;

export const StoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.4em;
`;

export const StoreLogo = styled.img`
  width: 45px;
  height: auto;
`;

export const StoreName = styled.h3`
  color: ${theme.colorPrimary};
  font-size: 1em;
`;

export const StoreText = styled.p`
  font-size: 14px;
  color: ${theme.colorPrimary};
  line-height: 1.5em;
`;
