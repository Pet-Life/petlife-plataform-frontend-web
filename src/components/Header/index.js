import React from 'react';

import Logo from '../Logo';
import Button from '../Button';

import { HeaderWrapper, HeaderContent} from './styles';

const Header = () => {
  return (
    <HeaderWrapper class="header-wrapper">
      <HeaderContent>
        <Logo />
      </HeaderContent>
      <HeaderContent secondary>
        <Button />
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
