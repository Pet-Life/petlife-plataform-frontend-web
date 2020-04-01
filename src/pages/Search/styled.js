import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContentMain = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 30px 30px;
  }
`;

export const Form = styled.form`
  width: 45%;
  margin-top: 1.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Grupo = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  margin-right: 0.5em;
  margin-bottom: 1.2em;
  padding: 0 15px;
  font-size: 1em;
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
`;

export const InputForm1 = styled(Input).attrs({
  className: "input-15"
})`
  width: 15%;
`;

export const InputForm2 = styled(Input).attrs({
  className: "input-50"
})`
  width: 50%;

  @media (max-width: 767px) {
    width: 42%;
  }
`;

export const InputForm3 = styled(Input).attrs({
  className: "input-85"
})`
  width: 85%;
`;

export const Button = styled.button`
  width: 60%;
  height: 42px;
  background: ${theme.colorTertiary};
  font-size: 1em;
  color: ${theme.colorSecondary};
  font-weight: bold;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;
