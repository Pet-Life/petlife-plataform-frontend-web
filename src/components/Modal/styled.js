import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LocationOn } from "@styled-icons/material";

export const Modal = styled.div`
  width: 600px;
  height: 370px;
  max-width: 600px;
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

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ModalBanner = styled.div`
  padding: 1.2em 1.5em;
  background: ${theme.colorSecondary};
`;

export const TitleModal = styled.h2`
  color: ${theme.colorPrimary};
  font-size: 1.3em;

  @media (max-width: 767px) {
    text-align: center;
    line-height: 1.5em;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 1em 1em;
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 767px) {
    justify-items: center;
  }
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

  @media (max-width: 767px) {
    width: 100%;
    justify-items: center;
  }
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

export const ButtonConfirmStore = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const StoreWrapper = styled.div`
  padding: 1em 0;
  display: ${(props) => (props.visi ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.2em;
`;

export const StoreTitle = styled.h4`
  margin-bottom: 1em;
  color: ${theme.colorPrimary};
  font-size: 1em;
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

export const LinkText = styled.a`
  margin: 2em 0;
  color: ${theme.colorPrimary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  transition: all 0.6s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;
