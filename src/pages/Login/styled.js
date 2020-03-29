import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const LoginWrapper = styled.div`
  height: 100vh;
  padding: 0 60px;
  display: flex;
  background: ${theme.colorQuaternary};
`;

export const LoginContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 553px;
  height: 390px;
`;
