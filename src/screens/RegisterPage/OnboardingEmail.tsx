import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterEmailInput from '../../components/@shared/RegisterEmailInput/RegisterEmailInput';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';

type OnboardingEmailScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingEmail'>;
const OnboardingEmail = ({ navigation: { navigate }, route }: OnboardingEmailScreenProps) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailAuth, setEmailAuth] = useState(false);

  const { mutate: onSubmitEmail } = useMutation(
    () => API.postUserEmailSend<{ email: string }>({ email }),
    {
      onSuccess: () => {
        setEmailAuth(true);
      },
      onError: (error) => {
        console.log('error', error);
      },
    }
  );

  const { mutate: onSubmitAuthNumber } = useMutation(
    () => API.postUserEmailVerify({ code, email }),
    {
      onSuccess: () => {
        navigate('OnboardingPw', {
          ...route.params,
          email: email,
        });
      },
      onError: (error) => {
        console.log('error', error);
      },
    }
  );

  const handleEmailValue = (text: string) => {
    setEmail(text);
  };

  const handleAuthValue = (text: string) => {
    setCode(text);
  };

  return (
    <>
      <ProgressBar step={2} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'로그인에 사용할\n이메일을 입력해주세요!'}
          subtitle={'아이디로 사용됩니다.'}
        />
        <RegisterEmailInput
          label="이메일"
          emailPlaceholder="이메일을 입력해주세요"
          authPlaceholder="인증번호를 입력해주세요."
          emailValue={email}
          authValue={code}
          handleEmailValue={handleEmailValue}
          handleAuthValue={handleAuthValue}
          onSubmitEmail={onSubmitEmail}
          onSubmitAuthNumber={onSubmitAuthNumber}
          emailAuth={emailAuth}
        />
      </Container>
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
