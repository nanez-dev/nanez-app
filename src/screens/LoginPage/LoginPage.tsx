import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';
import LoginLogo from '../../components/LoginLogo/LoginLogo';
import IdAndPwInput from '../../components/IdAndPwInput/IdAndPwInput';
import LoginBtn from '../../components/@shared/Button/LoginBtn/LoginBtn';
import RegisterBtn from '../../components/@shared/Button/RegisterBtn/RegisterBtn';
import { useMutation } from '@tanstack/react-query';
import API from '../../apis/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import { getMyInfo } from '../../apis/auth/getMyInfo';
import { useSetRecoilState } from 'recoil';
import { getLoginUser } from '../../atoms/user/selector';

type LoginScreenProps = NativeStackScreenProps<ParamListBase, 'LoginPage'>;

const LoginPage = ({ navigation: { navigate } }: LoginScreenProps) => {
  const setLoginUser = useSetRecoilState(getLoginUser);
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = useMutation(() => API.postUserSignin({ email, password }), {
    onSuccess: async (item) => {
      if (item) {
        AsyncStorage.setItem('refresh_token', item.refresh_token);
        EncryptedStorage.setItem('authCookie', item.access_token);
        await getMyInfo().then((res) => {
          setLoginUser({
            nickname: res.data.nickname,
            email: res.data.email,
            gender: res.data.gender,
            age_group: res.data.age_group,
            profile_image: res.data.profile_image,
          });
        });
        navigate('ProfilePage');
      }
    },
    onError: () => {
      Alert.alert('이메일 및 비밀번호가 틀렸습니다.');
    },
  });

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

  const goToRegister = () => {
    navigate('OnboardingResult');
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
