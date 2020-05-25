import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Heart } from "@styled-icons/fa-solid";

export const FooterWrapper = styled.footer`
  padding: 1em 1.5em;
  display: grid;
  grid-template-columns: 1fr;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

export const FooterText = styled.p`
  color: ${theme.color.primary};
  font-size: 1em;
  text-align: center;
`;

export const HeartIcon = styled(Heart)`
  width: 15px;
  height: 15px;
  color: ${theme.color.ninth};
`;
