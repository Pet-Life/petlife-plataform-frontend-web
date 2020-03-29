import React, { useState } from 'react';

import { MenuWrapper, Button, MenuIcon, MenuContent, LinksWrapper, CloseIcon, Links } from './styled';

const MenuBurguer = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  return (
    <MenuWrapper>
      <Button onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </Button>
      <MenuContent open={openMenu}>
          <LinksWrapper open={openMenu}>
          <Button onClick={() => setOpenMenu(false)}>
            <CloseIcon />
          </Button>
          <Links href="#">Como funciona</Links>
          <Links href="#">Pet Shop</Links>
          <Links href="#">Entrar</Links>
        </LinksWrapper>
      </MenuContent>
    </MenuWrapper>
  );
}

export default MenuBurguer;