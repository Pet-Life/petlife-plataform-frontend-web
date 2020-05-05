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

export const LaoderWrapper = styled.div.attrs({ className: "ring" })`
  display: ${(props) => (props.isLoading ? "inline-block" : "none")};
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
    border: 8px solid ${theme.colorTertiary};
    border-radius: 50%;
    animation: ${animation} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.colorTertiary} transparent transparent transparent;

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
