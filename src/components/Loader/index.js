import React from "react";

import * as S from "./styled";

const Loader = ({ isLoading }) => {
  return (
    <>
      <S.LaoderWrapper>
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
      </S.LaoderWrapper>
    </>
  );
};

export default Loader;
