import React from "react";
import ReactDOM from "react-dom";

import * as S from "./styled";

const Loader = ({ setIsLoading }) => {
  return ReactDOM.createPortal(
    <>
      <S.ModalShadow setIsLoading={setIsLoading} />
      <S.LaoderWrapper setIsLoading={setIsLoading}>
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
        <S.LoaderContent />
      </S.LaoderWrapper>
    </>,
    document.getElementById("loading")
  );
};

export default Loader;
