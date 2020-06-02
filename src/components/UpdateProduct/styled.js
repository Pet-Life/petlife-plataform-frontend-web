import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = styled.div`
  width: 600px;
  height: 600px;
  max-width: 600px;
  max-height: 600px;
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
    max-width: 75vw;
    min-height: 50vh;
  }
`;

export const ModalBanner = styled.div`
  padding: 1.2em 1.5em;
  background: ${theme.color.secondary};
`;

export const TitleModal = styled.h2`
  color: ${theme.color.primary};
  font-size: 1.3em;

  @media (max-width: 767px) {
    text-align: center;
    line-height: 1.5em;
    font-size: 1.2em;
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
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.button`
  width: 170px;
  height: 42px;
  background: ${theme.color.tertiary};
  font-size: 1em;
  color: ${theme.color.secondary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  cursor: pointer;
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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${theme.color.primary};
  font-size: 14px;
  font-weight: bold;
`;

export const LabelThumbnail = styled.label`
  margin-bottom: 0.5em;
  border: 1px dashed ${theme.color.quinary};
  background-size: contain;
  background-repeat: no-repeat;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > input {
    display: none;
  }

  & > .has-thumbnail {
    border: 0;
  }

  & > .has-thumbnail img {
    display: none;
  }
`;

export const Img = styled.img``;

export const TextArea = styled.textarea`
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  margin-bottom: 0.5em;
  padding: 0 20px;
  height: 42px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.color.primary};
`;

export const Button = styled.button`
  height: 42px;
  background: ${theme.color.tertiary};
  border: 1px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.color.secondary};
  font-weight: bold;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 0.2em 20px;
  height: 42px;
  color: ${theme.color.primary};
  font-size: 1em;
  border: 1px solid ${theme.color.quinary};
`;

export const Option = styled.option`
  margin-bottom: 0.5em;
  color: ${theme.color.primary};
  font-size: 1em;
`;
