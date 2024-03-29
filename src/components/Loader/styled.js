import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Modal = styled.div`
  width: 600px;
  height: 340px;
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

export const ModalShadow = styled.div`
  position: fixed;
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: white;
  opacity: 1;
  z-index: 7;
`;

export const LoaderContainer = styled.div`
  display: ${(props) => (props.isLoading ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  opacity: 1;
  background: #fff;
`;

export const LaoderWrapper = styled.div.attrs({ className: "ring" })`
  display: ${(props) => (props.isLoading ? "block" : "none")};
  position: fixed;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  z-index: 8;

  > * {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${theme.color.tertiary};
    border-radius: 50%;
    animation: ${animation} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.color.tertiary} transparent transparent transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export const LoaderContent = styled.div``;
