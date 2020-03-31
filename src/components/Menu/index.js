import React from "react";

import { MenuWrapper, LinkMenu } from "./styled";

const Menu = () => {
  return (
    <MenuWrapper>
      <LinkMenu href="#">Como funciona</LinkMenu>
      <LinkMenu href="#">Pet Shop</LinkMenu>
      <LinkMenu href="/entrar">Entrar</LinkMenu>
    </MenuWrapper>
  );
};

export default Menu;
