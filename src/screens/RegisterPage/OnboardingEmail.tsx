import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterEmailInput from '../../components/@shared/RegisterEmailInput/RegisterEmailInput';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';

type OnboardingEmailScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingEmail'>;
const OnboardingEmail = ({ navigation: { navigate }, route }: OnboardingEmailScreenProps) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailAuth, setEmailAuth] = useState(false);
  const [isClear, setIsClear] = useState(false);

  const { mutate: onSubmitEmail } = useMutation(
    () => API.postUserEmailSend<{ email: string }>({ email }),
    {
      onSuccess: () => {
        setEmailAuth(true);
      },
      onError: (error: any) => {
        throw new Error(`OnboardingEmail page email send ${error}`);
      },
    }
  );

  const { mutate: onSubmitAuthNumber } = useMutation(
    () => API.postUserEmailVerify({ code, email }),
    {
      onSuccess: (res) => {
        if (res) {
          setIsClear(true);
        }
      },
      onError: (error) => {
        throw new Error(`OnboardingEmail page email verify ${error}`);
      },
    }
  );

  const handleEmailValue = (text: string) => {
    setEmail(text);
  };

  const handleAuthValue = (text: string) => {
    setCode(text);
  };

  const goToNextStep = () => {
    if (isClear) {
      navigate('OnboardingPw', {
        ...route.params,
        email: email,
      });
    }
    return;
  };

  return (
    <>
      <ProgressBar step={2} totalStep={8} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RegisterHeader
            title={'로그인에 사용할\n이메일을 입력해주세요!'}
            subtitle={'아이디로 사용됩니다.'}
          />
          <RegisterEmailInput
            label="이메일"
            emailPlaceholder="이메일을 입력해주세요."
            authPlaceholder="인증번호를 입력해주세요."
            emailValue={email}
            authValue={code}
            handleEmailValue={handleEmailValue}
            handleAuthValue={handleAuthValue}
            onSubmitEmail={onSubmitEmail}
            onSubmitAuthNumber={onSubmitAuthNumber}
            emailAuth={emailAuth}
          />
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <NextBtn
              title="다음으로"
              bgColor={isClear ? '#65BFC4' : '#CCCCCC'}
              onPress={goToNextStep}
            />
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OnboardingEmail;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
