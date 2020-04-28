import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = styled.div`
  width: 800px;
  max-width: 600px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;
  max-height: calc(100% - 200px);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
  overflow: hidden;
  max-height: 400px;
  padding: 20px 40px;
`;

export const ModalFooter = styled.div`
  height: 60px;
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
  overflow: hidden;
`;

export const Input = styled.input`
  width: 400px;
  height: 48px;
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
