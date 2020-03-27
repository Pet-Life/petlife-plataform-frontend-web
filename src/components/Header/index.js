import React from 'react';

import Logo from '../Logo';
import Button from '../Button';

import { HeaderWrapper, HeaderContent, LinkMenu} from './styles';

const Header = () => {
  return (
    <HeaderWrapper class="header-wrapper">
      <HeaderContent>
        <Logo />
      </HeaderContent>
      <HeaderContent secondary>
        <LinkMenu href="#">Como funciona</LinkMenu>
        <LinkMenu href="#">Pet Shop</LinkMenu>
        <Button />
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
