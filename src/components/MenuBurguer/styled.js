import styled from 'styled-components';
import { Menu } from '@styled-icons/material';

export const MenuWrapper = styled.div`
  display: none;
  
  @media (max-width: 767px) {
    display: flex;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: #3C3B3B;
  cursor: pointer;
`;
