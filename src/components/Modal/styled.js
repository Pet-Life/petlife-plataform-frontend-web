import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Search } from "@styled-icons/material";

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 1;
  min-height: 100%;
`;

export const ModalContent = styled.div`
  width: 35em;
  height: 20em;
  padding: 2.5em 2em;
  background: ${theme.colorSecondary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContent = styled.div`
  width: 380px;
  height: 42px;
  margin: 2em 0;
  background: ${theme.colorSecondary};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(Search)`
  width: 32px;
  height: 32px;
  margin-right: 1em;
  margin-left: 1em;
  color: ${theme.colorPrimary};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1em;
  border: transparent;
  color: ${theme.colorPrimary};
  font-size: 1em;

  &:focus {
    outline-color: transparent;
  }
`;
