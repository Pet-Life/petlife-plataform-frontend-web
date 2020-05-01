import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LocationOn } from "@styled-icons/material";

export const Modal = styled.div`
  width: 550px;
  height: 370px;
  max-width: 550px;
  max-height: 400px;
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

export const TitleModal = styled.h2`
  color: ${theme.colorPrimary};
  font-size: 1.3em;
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 0 1em 0 1em;
  display: grid;
  grid-template-columns: 1fr;
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

export const Input = styled.input`
  height: 38px;
  margin-bottom: 0.3em;
  padding: 0 20px;
  background: ${theme.colorSecondary};
  color: ${theme.colorPrimary};
  font-size: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
`;

export const ConfirmButton = styled.button`
  height: 38px;
  background: ${theme.colorTertiary};
  color: ${theme.colorSecondary};
  font-size: 1em;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;

export const AddressInfo = styled.div`
  padding: 0.5em 0;
  display: grid;
  grid-template-columns: 3em 1fr;
  align-items: center;
`;

export const LocationIcon = styled(LocationOn)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;

export const AddressText = styled.p`
  font-size: 0.9em;
  color: ${theme.colorPrimary};
  line-height: 1.2em;
`;

export const StoreWrapper = styled.div`
  padding: 1em 0;
  display: ${(props) => (props.visi ? "none" : "grid")};
  grid-template-columns: 1fr;
  grid-gap: 0.2em;
`;

export const StoreContent = styled.div`
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.4em;
`;

export const Title = styled.h2`
  font-size: 1.1em;
  color: ${theme.colorPrimary};
`;

export const StoreDetalh = styled.div`
  padding: 1em 0.5em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5em;
  align-items: center;
`;

export const StoreLogo = styled.img`
  width: 70px;
  height: auto;
`;

export const StoreText = styled.p`
  font-size: 0.9em;
  color: ${theme.colorPrimary};
  line-height: 1.2em;
`;
