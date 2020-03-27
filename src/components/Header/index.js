import React from 'react';

import Logo from '../Logo';

import { HeaderWrapper} from './styles';

const Header = () => {
  return (
    <HeaderWrapper class="header-wrapper">
      <Logo />
    </HeaderWrapper>
  );
}

export default Header;
