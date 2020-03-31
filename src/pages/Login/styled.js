import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LoginWrapper = styled.div`
  height: 100vh;
  padding: 0 ${theme.spaceBig};
  background: ${theme.colorQuaternary};
  display: flex;
  align-items: center;

  @media (max-width: 952px) {
    padding: 15px 20px;
    flex-direction: column;
  }
`;

export const LoginContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 952px) {
    width: 100%;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 553px;
  height: 390px;
  margin: 1em 0 1em 0;

  @media (max-width: 767px) {
    width: 298px;
    height: 192px;
  }
`;

export const Form = styled.form`
  width: 55%;
  padding: 30px 40px 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colorSecondary};
  border-radius: 8px;
  box-shadow: 9px 9px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 767px) {
    width: 70%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.4em;
  font-size: 1.5em;
  color: ${theme.colorPrimary};
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 20px;
  margin-bottom: 1.2em;
  background: ${theme.colorSecondary};
  font-size: 1em;
  color: ${theme.colorPrimary};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 85%;
  }
`;

export const Link = styled.a`
  margin-bottom: 1.2em;
  font-size: 12px;
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
