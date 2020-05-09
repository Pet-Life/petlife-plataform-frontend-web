import styled from "styled-components";
import { theme } from "../../styles/theme";
import { CheckBoxOutlineBlank, CheckBox } from "@styled-icons/material";

export const CardWrapper = styled.aside`
  border: 1px solid ${theme.colorQuinary};
  display: flex;
  flex-direction: column;
  padding: 2rem 1em;
  width: 15%;
  height: 200px;
`;

export const Title = styled.h3`
  font-size: 1.1em;
  color: ${theme.colorPrimary};
`;

export const List = styled.ul`
  margin: 1em 0 0 0;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a``;

export const ListItem = styled.li`
  margin-bottom: 1em;
  color: ${theme.colorPrimary};
  font-size: 1em;
`;

export const Span = styled.span`
  margin-right: 0.4em;
`;

export const CheckBoxIcon = styled(CheckBoxOutlineBlank)`
  width: 22px;
  height: 22px;
  margin-right: 0.5em;
  color: ${theme.colorPrimary};
`;

export const CheckIcon = styled(CheckBox)`
  width: 22px;
  height: 22px;
  margin-right: 0.5em;
  color: ${theme.colorPrimary};
`;
