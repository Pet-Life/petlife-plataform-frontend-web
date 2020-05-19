import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Form = styled.form`
  width: 400px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;

export const Label = styled.label`
  margin-bottom: 0.3em;
  color: ${theme.colorPrimary};
  font-size: 14px;
  font-weight: bold;
`;

export const LabelThumbnail = styled.label`
  margin-bottom: 0.5em;
  border: 1px dashed ${theme.colorQuinary};
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

export const Input = styled.input`
  margin-bottom: 0.3em;
  padding: 0 20px;
  height: 42px;
  background: ${theme.colorSecondary};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.colorPrimary};
`;

export const Button = styled.button`
  height: 42px;
  background: ${theme.colorTertiary};
  border: 1px solid ${theme.colorTertiary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.colorSecondary};
  font-weight: bold;
  cursor: pointer;
`;
