import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Form = styled.form`
  width: 400px;
  max-width: 400px;
  min-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${theme.colorPrimary};
  font-size: 14px;
  font-weight: bold;
`;

export const LabelThumbnail = styled.label`
  margin-bottom: 0.5em;
  border: 1px dashed ${theme.colorQuinary};
  background-size: cover;
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
  max-height: 250px;
  min-height: 250px;
  min-height: 150px;
  max-height: 150px;
`;

export const Input = styled.input`
  margin-bottom: 0.5em;
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

export const Select = styled.select`
  padding: 0.2em 20px;
  height: 42px;
  color: ${theme.colorPrimary};
  font-size: 1em;
  border: 1px solid ${theme.colorQuinary};
`;

export const Option = styled.option`
  margin-bottom: 0.5em;
  color: ${theme.colorPrimary};
  font-size: 1em;
`;
