import React from "react";

import * as S from "./styled";

const Loader = ({ isLoading }) => {
  return (
    <S.LoaderContainer isLoading={isLoading}>
      <S.LaoderWrapper isLoading={isLoading}>
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
      </S.LaoderWrapper>
    </S.LoaderContainer>
  );
};

export default Loader;
