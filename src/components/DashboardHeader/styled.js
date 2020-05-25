import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 80% 1fr;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-items: center;
  justify-items: end;
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  background: ${theme.color.secondary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  color: ${theme.color.tertiary};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const AvatarProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;
