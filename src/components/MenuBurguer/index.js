import React, { useState } from "react";

import {
  MenuWrapper,
  Button,
  MenuIcon,
  MenuContent,
  LinksWrapper,
  CloseIcon,
  Links,
} from "./styled";

const MenuBurguer = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
          <Links href="/petshop/entrar">Sou um Pet Shop</Links>
          <Links href="/entrar">Entrar</Links>
        </LinksWrapper>
      </MenuContent>
    </MenuWrapper>
  );
};

export default MenuBurguer;
