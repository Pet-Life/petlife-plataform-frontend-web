import React, { useState } from "react";

import * as S from "./styled";

import Modal from "../Modal";

import image from "../../assets/image-1.jpg";

const SectionCep = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.SectionWrapper>
      <S.SectionContent>
        <S.Image src={image} />
      </S.SectionContent>
      <S.SectionContent secondary>
        <S.TitleContent>
          Encontrar um <S.Span>Pet Shop</S.Span> próximo a você ficou mais
          fácil!
        </S.TitleContent>
        <S.SearchContainer>
          <S.Button type="button" onClick={() => setIsOpen(true)}>
            <S.SpanSecondary>
              <S.SearchIcon />
            </S.SpanSecondary>
            <S.SpanSecondary>Buscar endereço</S.SpanSecondary>
          </S.Button>
          <S.ButtonSecondary type="button" onClick={() => setIsOpen(true)}>
            Buscar
          </S.ButtonSecondary>
        </S.SearchContainer>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </S.SectionContent>
    </S.SectionWrapper>
  );
};

export default SectionCep;
