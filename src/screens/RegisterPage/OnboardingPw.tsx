import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterPwInput from '../../components/@shared/RegisterPwInput/RegisterPwInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  ButtonText,
  NextButton,
} from '../../components/@shared/RegisterPwInput/RegisterPwInput.styles';

type OnboardingPwScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingPw'>;
const OnboardingPw = ({ navigation: { navigate }, route }: OnboardingPwScreenProps) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const passwordRegExp = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const passwordRegExpCheck = passwordRegExp.test(password);
  const rePasswordRegExpCheck = passwordRegExp.test(rePassword);

  const [isWrite, setIsWrite] = useState(false);

  useEffect(() => {
    if (password.length > 7 && rePassword.length > 7 && password === rePassword) {
      setIsWrite(true);
    } else {
      setIsWrite(false);
    }
  }, [password, rePassword]);

  const handlePasswordValue = (text: string) => {
    setPassword(text);
  };

  const handleRePasswordValue = (text: string) => {
    setRePassword(text);
  };

  const goToNext = () => {
    if (passwordRegExpCheck && rePasswordRegExpCheck) {
      navigate('OnboardingGender', {
        password,
        ...route.params,
      });
    } else {
      Alert.alert('비밀번호 조건이 일치하지 않습니다.');
    }
  };

  return (
    <>
      <ProgressBar step={3} totalStep={8} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RegisterHeader
            title={'로그인에 사용할\n비밀번호를 입력해주세요!'}
            subtitle={'숫자, 영문, 특수문자 8자 ~ 16자 입니다.'}
          />
          <RegisterPwInput
            placeholder="숫자, 영문, 특수문자 8~ 16자 입력"
            rePlaceholder="비밀번호를 다시 한 번 입력해주세요."
            label="비밀번호"
            password={password}
            rePassword={rePassword}
            handlePasswordValue={handlePasswordValue}
            handleRePasswordValue={handleRePasswordValue}
            goToNext={goToNext}
          />
          <NextButton onPress={goToNext} isWrite={isWrite}>
            <ButtonText>다음으로</ButtonText>
          </NextButton>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OnboardingPw;

const Container = styled.View`
  padding: 26px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
