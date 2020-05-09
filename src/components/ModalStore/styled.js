import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = styled.div`
  width: 600px;
  height: 470px;
  max-width: 600px;
  max-height: 470px;
  padding: 0 2em;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: initial;
`;

export const ModalBanner = styled.div`
  padding: 1.2em 1.5em;
  background: ${theme.colorSecondary};
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 1em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
`;

export const TitleModal = styled.h2`
  color: ${theme.colorPrimary};
  font-size: 1.3em;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 95px 1fr 1fr;
  grid-gap: 0.1em;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;

export const ContentSecondary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1em;
  justify-items: center;
  justify-content: center;
  align-items: center;

  &:last-child {
    justify-content: start;
    justify-items: start;
  }
`;

export const StoreLogo = styled.img`
  width: 90px;
  height: auto;
`;

export const Span = styled.span`
  color: ${theme.colorPrimary};
  font-size: 1em;
  font-weight: bold;
`;

export const Text = styled.p`
  color: ${theme.colorPrimary};
  font-size: 1em;
  line-height: 1.6em;
`;

export const ModalFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const ConfirmClose = styled.button`
  width: 220px;
  height: 42px;
  background: #219653;
  color: #fff;
  font-size: 1em;
  border: 2px solid #219653;
  border-radius: 4px;
  cursor: pointer;
  max-width: 220px;
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
