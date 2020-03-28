import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkMenu = styled.a`
  margin-right: 2.1875em;
  font-size: 1em;
  color: #3C3B3B;

  @media (max-width: 952px) {
    display: none;
  }
`;
