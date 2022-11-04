import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';
import LoginLogo from '../../components/LoginLogo/LoginLogo';
import { useSetRecoilState } from 'recoil';
import { loginCheck } from '../../atoms/loginCheck';
import IdAndPwInput from '../../components/IdAndPwInput/IdAndPwInput';
import LoginBtn from '../../components/LoginBtn/LoginBtn';
import RegisterBtn from '../../components/RegisterBtn/RegisterBtn';

type LoginScreenProps = NativeStackScreenProps<ParamListBase, 'LoginPage'>;

const LoginPage = ({ navigation: { navigate } }: LoginScreenProps) => {
  const setIsLogin = useSetRecoilState(loginCheck);
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailValue = (text: string) => {
    setEmail(text);
  };

  const onChangePasswordValue = (text: string) => {
    setPassword(text);
  };

  const onSubmitEmailEditing = () => {
    passwordRef.current?.focus();
  };
  const onSubmitPasswordEditing = () => {
    if (email === '' || password === '') {
      // 추후 모달창으로 디자인틱하게 변경하기
      return Alert.alert('로그인 에러');
    } else {
      setIsLogin(true);
    }
  };

  const goToRegister = () => {
    navigate('Auth', { screen: 'RegisterPage' });
  };

  return (
    <Container>
      {/* 로그인 로고 */}
      <LoginLogo />
      {/* id, pw */}
      <IdAndPwInput
        email={email}
        onChangeEmailValue={onChangeEmailValue}
        onSubmitEmailEditing={onSubmitEmailEditing}
        passwordRef={passwordRef}
        password={password}
        onChangePasswordValue={onChangePasswordValue}
        onSubmitPasswordEditing={onSubmitPasswordEditing}
      />
      {/* login btn */}
      <LoginBtn onSubmitPasswordEditing={onSubmitPasswordEditing} />
      {/* register */}
      <RegisterBtn onPress={goToRegister} />
    </Container>
  );
};

export default LoginPage;

const Container = styled.View`
  flex: 1;
  padding: 0px 16px;
  background-color: white;
`;
