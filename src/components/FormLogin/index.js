import React from 'react';

import * as S from './styled';

const FormLogin = () => {
  return (
    <S.FormWrapper>
      <S.Title>Entrar</S.Title>
      <S.Input 
        type="text"
        placeholder="E-mail"
      />
      <S.Input 
        type="password"
        placeholder="Senha"
      />
      <S.Links href="#">Esqueceu sua senha?</S.Links>
      <S.Button>Entrar</S.Button>
      <S.Links href="#">Não tem conta? Crie uma!</S.Links>
    </S.FormWrapper>
  );
}

export default FormLogin;
