import React from "react";

import * as S from "./styled";

import Logo from "../Logo";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <Logo />
        <S.Text>Petlife é uma plataforma de e-commerce para Pet Shops.</S.Text>
        <S.SocialWrapper>
          <S.Links href="https://facebook.com" target="_blank">
            <S.FacebookIcon />
          </S.Links>
          <S.Links href="https://instagram.com" target="_blank">
            <S.InstagramIcon />
          </S.Links>
          <S.Links href="https://twitter.com" target="_blank">
            <S.TwitterIcon />
          </S.Links>
          <S.Links href="https://youtube.com" target="_blank">
            <S.YoutubeIcon />
          </S.Links>
        </S.SocialWrapper>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Mapa do site</S.Title>
        <S.Links href="/cadastro">Cadastra-se</S.Links>
        <S.Links href="/entrar">Entrar</S.Links>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Tem um Pet Shop?</S.Title>
        <S.Links href="/petshop/cadastro">Cadastre seu pet shop</S.Links>
        <S.Links href="/petshop/entrar">Já sou parceiro</S.Links>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Contato</S.Title>
        <S.Links>contato@petlife.com.br</S.Links>
        <S.Links>+55 (11) 99999-9999</S.Links>
      </S.FooterContent>
      <S.Copyright>
        <S.Text>© 2020 Petlife. Todos os direitos reservados.</S.Text>
        <S.Text>
          Feito com <S.HeartIcon /> Petlife
        </S.Text>
      </S.Copyright>
    </S.FooterWrapper>
  );
};

export default Footer;
