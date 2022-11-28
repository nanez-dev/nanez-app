import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';
import LoginLogo from '../../components/LoginLogo/LoginLogo';
import IdAndPwInput from '../../components/IdAndPwInput/IdAndPwInput';
import LoginBtn from '../../components/@shared/Button/LoginBtn/LoginBtn';
import RegisterBtn from '../../components/@shared/Button/RegisterBtn/RegisterBtn';
import { useMutation, useQuery } from '@tanstack/react-query';
import API from '../../apis/apis';

type LoginScreenProps = NativeStackScreenProps<ParamListBase, 'LoginPage'>;

const LoginPage = ({ navigation: { navigate } }: LoginScreenProps) => {
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');

  const { mutate } = useMutation(() => API.postUserSignin({ email, password }), {
    onSuccess: (item) => {
      setToken(item.access_token);
    },
    onError: () => {
      Alert.alert('이메일 및 비밀번호가 틀렸습니다.');
    },
  });

  // const { refetch } = useQuery(['user'], () => API.getUserme(token), {
  //   enabled: false,
  //   onSuccess: (i) => {
  //     console.log(i);
  //   },
  // });

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
      return Alert.alert('로그인 에러');
    } else {
      mutate();
      // refetch();
    }
  };

  console.log(token);

  const goToRegister = () => {
    navigate('RegisterPage');
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
