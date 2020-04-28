import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = styled.div`
  width: 800px;
  height: 600px;
  max-width: 600px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;
  max-height: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalBanner = styled.div`
  margin-bottom: 1em;
  background: ${theme.colorSecondary};
  padding: 10px;
`;

export const TitleModal = styled.h2`
  color: ${theme.colorPrimary};
  font-size: 1.3em;
`;

export const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  width: 100%;
  padding: 0 0 20px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  padding: 1em;
  color: ${theme.colorPrimary};
  font-size: 1em;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colorQuinary};
  }
`;

export const Link = styled.a``;

export const Span = styled.span`
  color: ${theme.colorPrimary};
  font-size: 14px;
`;

export const ModalFooter = styled.div`
  padding: 20px;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const Input = styled.input`
  width: 400px;
  height: 48px;
  margin-bottom: 1em;
  padding: 0 20px;
  background: ${theme.colorSecondary};
  color: ${theme.colorPrimary};
  font-size: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
`;

export const ConfirmButton = styled.button`
  width: 220px;
  height: 48px;
  background: ${theme.colorTertiary};
  color: ${theme.colorSecondary};
  font-size: 1em;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;
