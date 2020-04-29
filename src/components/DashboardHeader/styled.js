import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Notifications } from "@styled-icons/material";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.colorQuinary};
  display: grid;
  grid-template-columns: 80% 1fr;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  background: ${theme.colorSecondary};
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  color: ${theme.colorTertiary};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const NotificationIcon = styled(Notifications)`
  width: 22px;
  height: 22px;
  color: ${theme.colorPrimary};
`;

export const AvatarProfile = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colorPrimary};
  border-radius: 50px;
`;
