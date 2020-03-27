import React from 'react';

import { MenuWrapper, LinkMenu } from './styled';

import Button from '../Button';

const Menu = () => {
  return (
    <MenuWrapper>
      <LinkMenu href="#">Como funciona</LinkMenu>
      <LinkMenu href="#">Pet Shop</LinkMenu>
      <Button className="button" />
    </MenuWrapper>
  );
}

export default Menu;
