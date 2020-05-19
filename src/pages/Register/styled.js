import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.colorQuinary};
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 767px) {
    padding: 5px 15px;
  }
`;

export const RegisterContent = styled.div`
  padding: 2em 60px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (max-width: 952px) {
    width: 100%;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 450px;
  max-width: 450px;
  min-width: 450px;
  min-height: 400px;
  padding: 30px 40px 10px 40px;
  background: ${theme.colorSecondary};
  border-radius: 8px;
  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.4em;
  font-size: 1.5em;
  color: ${theme.colorPrimary};
`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  padding: 0 20px;
  margin-bottom: 1.2em;
  background: ${theme.colorSecondary};
  font-size: 1em;
  color: ${theme.colorPrimary};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const Link = styled.a`
  margin-bottom: 1.2em;
  font-size: 14px;
  color: ${theme.colorPrimary};
  line-height: 15px;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  margin-bottom: 1.2em;
  background: ${theme.colorTertiary};
  font-size: 1em;
  color: ${theme.colorSecondary};
  font-weight: bold;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;
`;
