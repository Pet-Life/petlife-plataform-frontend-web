import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = styled.div`
  width: 870px;
  height: 600px;
  max-width: 890px;

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
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  padding: 20px;
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

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.4em;
`;

export const FormContent = styled.div`
  display: ${(props) => (props.visi ? "none" : "grid")};
  grid-template-columns: ${(props) => (props.secondary ? "1fr 1fr" : "1fr")};
  grid-gap: 0.2em;
`;

export const SpanError = styled.span`
  color: red;
  font-size: 12px;
`;

export const Input = styled.input`
  height: 42px;
  margin-bottom: 0.3em;
  padding: 0 20px;
  background: ${theme.colorSecondary};
  color: ${theme.colorPrimary};
  font-size: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
`;

export const ConfirmButton = styled.button`
  height: 48px;
  background: ${theme.colorTertiary};
  color: ${theme.colorSecondary};
  font-size: 1em;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;

export const StoreWrapper = styled.div`
  margin-top: 1em;
  display: ${(props) => (props.visi ? "none" : "grid")};
  grid-template-columns: 1fr;
  grid-gap: 0.4em;
`;

export const StoreContent = styled.div`
  padding: 1.2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.4em;
`;

export const Title = styled.h2`
  font-size: 1.1em;
  color: ${theme.colorPrimary};
`;

export const StoreDetalh = styled.div`
  padding: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 8em 1fr;
  grid-gap: 0.1em;
`;

export const StoreLogo = styled.img`
  width: 80px;
  height: auto;
`;

export const StoreText = styled.p`
  font-size: 16px;
  color: ${theme.colorPrimary};
  line-height: 1.2em;
`;
