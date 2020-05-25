import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Menu, Close } from "@styled-icons/material";

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 952px) {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: ${theme.color.primary};
`;

export const MenuContent = styled.nav`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  transform: ${(props) => (props.open ? "translateX(0)" : "translate(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

export const LinksWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 30px;
  top: 0;
  right: 0;
  left: 0;
  background: ${theme.color.secondary};
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.open ? "translateX(0)" : "translate(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 1em;
  right: 5em;
  color: ${theme.color.primary};
`;

export const Links = styled.a`
  margin-bottom: 1.5625em;
  font-size: 1em;
  color: ${theme.color.primary};

  &:hover {
    background: none;
  }

  &:last-child {
    color: ${theme.color.tertiary};
  }
`;
