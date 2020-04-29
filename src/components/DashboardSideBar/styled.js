import styled from "styled-components";
import { theme } from "../../styles/theme";
import {
  Dashboard,
  AssignmentInd,
  BusinessCenter,
  Settings,
} from "@styled-icons/material";

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${theme.colorQuinary};
  background: ${theme.colorSecondary};
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
`;

export const DashboardIcon = styled(Dashboard)`
  width: 22px;
  height: 22px;
  color: ${theme.colorPrimary};
`;

export const AssignIcon = styled(AssignmentInd)`
  width: 22px;
  height: 22px;
  color: ${theme.colorPrimary};
`;

export const BusinessIcon = styled(BusinessCenter)`
  width: 22px;
  height: 22px;
  color: ${theme.colorPrimary};
`;

export const SettingsIcon = styled(Settings)`
  width: 22px;
  height: 22px;
  color: ${theme.colorPrimary};
`;

export const Link = styled.a``;

export const Span = styled.span`
  color: ${theme.colorPrimary};
  font-size: 1em;
`;
