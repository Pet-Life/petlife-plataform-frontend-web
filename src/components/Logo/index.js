import React from 'react';

import logo from '../../assets/logo.svg';

import { LogoWrapper, LogoImage, Link } from './styles';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href='/'>
        <LogoImage src={logo} />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
