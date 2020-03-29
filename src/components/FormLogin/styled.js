import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FormWrapper = styled.form`
  width: 70%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.bgSecondary};
  border-radius: 8px;
  box-shadow: 9px 9px 12px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  margin-bottom: 1.5em;
  font-size: 1.5em;
  color: ${theme.colorPrimary};
`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  margin-bottom: 1.5em;
  padding: 0 20px;
  font-size: 1em;
  color: ${theme.colorPrimary};
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Links = styled.a`
  font-size: 14px;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }  
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  background: ${theme.colorTertiary};
  font-size: 1em;
  color: ${theme.colorSecondary};
  font-weight: bold;
  border: 2px solid ${theme.colorTertiary};
  border-radius: 4px;
  cursor: pointer;  
  transition: all 0.3s;

  &:hover {
    background: ${theme.colorSecondary};
    color: ${theme.colorTertiary};
  }
`;
