import React from 'react';

import logo from '../../assets/logo.svg';

import { LogoWrapper, LogoImage, Link } from './styles';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href='/'>
        <LogoImage src={logo} alt="Logo Petlife"/>
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
