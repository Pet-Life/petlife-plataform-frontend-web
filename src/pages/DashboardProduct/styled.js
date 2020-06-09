import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Form = styled.form`
  width: 400px;
  max-width: 400px;
  min-width: 400px;
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
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
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
  max-width: 400px;
  max-height: 150px;
  min-height: 250px;
  min-height: 150px;
  min-width: 100%;
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
