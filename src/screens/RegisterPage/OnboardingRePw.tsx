import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import RegisterPwInput from '../../components/@shared/RegisterPwInput/RegisterPwInput';

type OnboardingRePwScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingRePw'>;
const OnboardingRePw = ({ navigation: { navigate }, route }: OnboardingRePwScreenProps) => {
  const [rePassword, setRePassword] = useState('');
  const passwordRegExp = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const passwordRegExpCheck = passwordRegExp.test(rePassword);
  const { password }: any = route.params;

  const handleRePasswordValue = (text: string) => {
    setRePassword(text);
  };

  const goToNext = () => {
    if (passwordRegExpCheck && password === rePassword) {
      navigate('OnboardingGender', {
        ...route.params,
      });
    } else {
      Alert.alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <>
      <ProgressBar step={3} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'비밀번호를\n다시 한 번 입력해주세요!'}
          subtitle={'숫자, 영문, 특수문자 8자 ~ 16자 입니다'}
        />
        <RegisterPwInput
          placeholder="숫자, 영문, 특수문자 8~ 16자 입력"
          label="비밀번호 확인"
          password={rePassword}
          handlePasswordValue={handleRePasswordValue}
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingRePw;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
