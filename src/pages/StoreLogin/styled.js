import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.colorQuinary};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LoginWrapper = styled.div`
  padding: 5em 60px;
  background: ${theme.colorQuaternary};
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const Form = styled.form`
  width: 450px;
  height: 300px;
  max-width: 450px;
  max-height: 300px;
  padding: 2em 2em;
  background: ${theme.colorSecondary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.6em;
`;

export const TitleForm = styled.h2`
  margin-bottom: 1.2em;
  font-size: 1.2em;
  color: ${theme.colorPrimary};
  text-align: center;
`;

export const Input = styled.input`
  height: 38px;
  margin-bottom: 0.6em;
  padding: 0 20px;
  background: ${theme.colorSecondary};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.colorPrimary};
`;

export const ButtonRegister = styled.button`
  height: 38px;
  background: ${theme.colorTertiary};
  color: ${theme.colorSecondary};
  font-size: 1em;
  font-weight: bold;
  border: 1px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;

export const Link = styled.a`
  color: ${theme.colorPrimary};
  font-size: 14px;
  text-align: center;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;
