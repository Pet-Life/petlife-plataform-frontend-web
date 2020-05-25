import React from "react";
import ReactDOM from "react-dom";

import * as S from "./styled";

const Loader = ({ setIsLoading }) => {
  return ReactDOM.createPortal(
    <>
      <S.ModalShadow setIsLoading={setIsLoading} />
      <S.Modal>
        <S.ModalBanner></S.ModalBanner>
        <S.ModalContent>
          <S.LaoderWrapper setIsLoading={setIsLoading}>
            <S.LoaderContent />
            <S.LoaderContent />
            <S.LoaderContent />
            <S.LoaderContent />
          </S.LaoderWrapper>
        </S.ModalContent>
        <S.ModalFooter></S.ModalFooter>
      </S.Modal>
    </>,
    document.getElementById("loading")
  );
};

export default Loader;
