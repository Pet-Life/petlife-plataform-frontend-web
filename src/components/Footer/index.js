import React from 'react';

import * as S from './styled';

import Logo from '../Logo';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <Logo />
        <S.Text>
          Petlife é uma plataforma de e-commerce 
          para Pet Shops.
        </S.Text>
        <S.SocialWrapper>
          <S.Links href="#">
            <S.FacebookIcon />
          </S.Links>
          <S.Links href="#">
            <S.InstagramIcon />
          </S.Links>
          <S.Links href="#">
            <S.TwitterIcon />
          </S.Links>
          <S.Links href="#">
            <S.YoutubeIcon />
          </S.Links>
        </S.SocialWrapper>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Mapa do site</S.Title>
        <S.Links href="#">Sobre Nós</S.Links>
        <S.Links href="#">Como funciona</S.Links>
        <S.Links href="#">Cadastra-se</S.Links>
        <S.Links href="#">Entrar</S.Links>
        <S.Links href="#">Blog</S.Links>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Tem um Pet Shop?</S.Title>
        <S.Links href="#">Cadastre seu pet shop</S.Links>
        <S.Links href="#">Quero saber mais informações</S.Links>
      </S.FooterContent>
      <S.FooterContent>
        <S.Title>Contato</S.Title>
        <S.Links href="#">contato@petlife.com.br</S.Links>
        <S.Links href="#">+55 (11) 99999-9999</S.Links>
        <S.Links href="#">
          R. Nossa Sra. da Lapa, 270/284 - Lapa,
          São Paulo - SP, 02675-031
        </S.Links>
      </S.FooterContent>
      <S.Copyright>
        <S.Text>
          © 2020 Petlife. Todos os direitos reservados.
        </S.Text>
        <S.Text>
          Feito com <S.HeartIcon /> Petlife
        </S.Text>
      </S.Copyright>
    </S.FooterWrapper>
  );
}

export default Footer;
