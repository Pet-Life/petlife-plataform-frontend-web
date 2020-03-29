import React from 'react';

import * as S from './styled';

import image from '../../assets/image-2.jpg';

import Logo from '../../components/Logo';
import FormLogin from '../../components/FormLogin';

const Login = () => {
  return (
    <>
      <S.LoginWrapper>
        <S.LoginContent>
          <Logo />
          <S.Image src={image} />
        </S.LoginContent>
        <S.LoginContent>
          <FormLogin />
        </S.LoginContent>
      </S.LoginWrapper>
    </>
  );
}

export default Login;
