import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const LoginWrapper = styled.div`
  height: 100vh;
  padding: 0 60px;
  display: flex;
  background: ${theme.colorQuaternary};
  
  @media (max-width: 952px) {
    height: 100%;
    padding: 0 30px;
    flex-direction: column;
  }
`;

export const LoginContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 952px) {
    width: 100%;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 553px;
  height: 390px;

  @media (max-width: 952px) {
    width: 298px;
    height: 192px;
    margin-bottom: 1.2em;
  } 
`;
