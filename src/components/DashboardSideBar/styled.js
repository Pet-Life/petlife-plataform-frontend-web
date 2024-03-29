import styled from "styled-components";
import { theme } from "../../styles/theme";
import {
  Dashboard,
  AssignmentInd,
  BusinessCenter,
  Settings,
  PowerSettingsNew as Power,
} from "@styled-icons/material";

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${theme.color.quinary};
  background: ${theme.color.secondary};
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  @media (max-width: 767px) {
    width: 85%;
  }
`;

export const DashboardIcon = styled(Dashboard)`
  width: 22px;
  height: 22px;
  color: ${theme.color.primary};
`;

export const AssignIcon = styled(AssignmentInd)`
  width: 22px;
  height: 22px;
  color: ${theme.color.primary};
`;

export const BusinessIcon = styled(BusinessCenter)`
  width: 22px;
  height: 22px;
  color: ${theme.color.primary};
`;

export const SettingsIcon = styled(Settings)`
  width: 22px;
  height: 22px;
  color: ${theme.color.primary};
`;

export const PowerIcon = styled(Power)`
  width: 22px;
  height: 22px;
  color: ${theme.color.primary};
`;

export const Link = styled.a``;

export const Span = styled.span`
  color: ${theme.color.primary};
  font-size: 1em;
`;

export const ButtonLogout = styled.button`
  height: 38px;
  color: ${theme.color.primary};
  font-size: 1em;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.primary};
  cursor: pointer;
`;
