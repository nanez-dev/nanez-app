import React, { useState } from 'react';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterPwInput from '../../components/@shared/RegisterPwInput/RegisterPwInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Alert } from 'react-native';

type OnboardingPwScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingPw'>;
const OnboardingPw = ({ navigation: { navigate }, route }: OnboardingPwScreenProps) => {
  const [password, setPassword] = useState('');
  const passwordRegExp = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const passwordRegExpCheck = passwordRegExp.test(password);

  const handlePasswordValue = (text: string) => {
    setPassword(text);
  };

  const goToNext = () => {
    if (passwordRegExpCheck) {
      navigate('OnboardingRePw', {
        password,
        ...route.params,
      });
    } else {
      Alert.alert('비밀번호가 짧습니다.');
    }
  };

  return (
    <>
      <ProgressBar step={3} totalStep={7} />
      <Container>
        <RegisterHeader
          title={'로그인에 사용할\n비밀번호를 입력해주세요!'}
          subtitle={'숫자, 영문, 특수문자 8자 ~ 16자 입니다.'}
        />
        <RegisterPwInput
          placeholder="숫자, 영문, 특수문자 8~ 16자 입력"
          label="비밀번호"
          password={password}
          handlePasswordValue={handlePasswordValue}
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingPw;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
