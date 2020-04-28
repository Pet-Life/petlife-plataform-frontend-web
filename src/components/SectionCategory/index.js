import React from "react";

import * as S from "./styled";

import iconRation from "../../assets/ration.png";
import iconMedicine from "../../assets/medicine.png";
import iconToys from "../../assets/toys.png";
import iconHygiene from "../../assets/hygiene.png";

const SectionCategory = () => {
  return (
    <S.Section>
      <S.TitleWrapper>
        <S.Title>Categorias</S.Title>
      </S.TitleWrapper>
      <S.SectionContent>
        <S.Image src={iconRation} />
        <S.TitleCategory>Ração e Alimentos</S.TitleCategory>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconMedicine} />
        <S.TitleCategory>Medicamentos</S.TitleCategory>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconToys} />
        <S.TitleCategory>Brinquedos</S.TitleCategory>
      </S.SectionContent>
      <S.SectionContent>
        <S.Image src={iconHygiene} />
        <S.TitleCategory>Higiene e Limpeza</S.TitleCategory>
      </S.SectionContent>
    </S.Section>
  );
};

export default SectionCategory;
