import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 767px) {
    padding: 5px 15px;
    justify-items: center;
  }
`;

export const LoginContent = styled.div`
  padding: 2em 60px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 450px;
  max-width: 450px;
  min-width: 450px;
  min-height: 400px;
  padding: 30px 40px 10px 40px;
  background: ${theme.color.secondary};
  border-radius: 8px;
  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 767px) {
    width: 70vw;
    max-width: 70vw;
    min-width: 70vw;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.4em;
  font-size: 1.5em;
  color: ${theme.color.primary};
  text-align: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  padding: 0 20px;
  margin-bottom: 0.5em;
  background: ${theme.color.secondary};
  font-size: 1em;
  color: ${theme.color.primary};
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 85%;
  }
`;

export const Link = styled.a`
  margin-bottom: 1.2em;
  font-size: 14px;
  color: ${theme.color.primary};
  line-height: 15px;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  margin-bottom: 1.2em;
  background: ${theme.color.tertiary};
  font-size: 1em;
  color: ${theme.color.secondary};
  font-weight: bold;
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  cursor: pointer;
`;

export const TextError = styled.span`
  color: ${theme.color.ninth};
  font-size: 12px;
  font-weight: bold;
`;
