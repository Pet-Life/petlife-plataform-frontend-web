import React from 'react';

import * as S from './styled';

import image from '../../assets/imagem-1.jpg';

const Section = () => {
  return (
    <S.SectionWrapper>
      <S.SectionContent>
        <S.Image src={image} />
      </S.SectionContent>
      <S.SectionContent secondary>
        <S.TitleContent>
          Encontrar um <S.Span>Pet Shop</S.Span> próximo 
          a você ficou mais fácil!
        </S.TitleContent>
        <S.Form>
          <S.Input 
            type="text"
            placeholder="Digite seu CEP"
          />
          <S.Button type="submit">Buscar</S.Button>
        </S.Form>
        <S.Links href="#">Não sei o meu CEP</S.Links>
      </S.SectionContent>
    </S.SectionWrapper>
  );
}

export default Section;
