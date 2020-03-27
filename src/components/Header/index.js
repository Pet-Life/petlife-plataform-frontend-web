import React from 'react';

import Logo from '../Logo';
import Menu from '../Menu';
import MenuBurguer from '../MenuBurguer';

import { HeaderWrapper, HeaderContent } from './styled';

const Header = () => {
  return (
    <HeaderWrapper className="header-wrapper">
      <HeaderContent>
        <Logo />
      </HeaderContent>
      <HeaderContent secondary>
        <Menu />
        <MenuBurguer />
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
