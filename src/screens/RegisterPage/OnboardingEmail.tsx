import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import RegisterInput from '../../components/@shared/RegisterInput/RegisterInput';

const OnboardingEmail = () => {
  const [isWrite, setIsWrite] = useState(false);
  const [email, setEmail] = useState('');

  const { mutate } = useMutation(() => API.postUserEmailSend<{ email: string }>({ email }), {
    onSuccess: () => {
      console.log('success');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const onCreate = () => {
    mutate();
  };

  const handleEmailValue = (text: string) => {
    setEmail(text);
  };

  return (
    <>
      <ProgressBar step={2} totalStep={6} />
      <Container>
        <RegisterHeader
          title={'로그인에 사용할\n이메일을 입력해주세요!'}
          subtitle={'아이디로 사용됩니다.'}
        />
        <RegisterInput
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={email}
          handleEmailValue={handleEmailValue}
          onSubmitEmail={onCreate}
        />
        <Button isWrite={isWrite}>
          <DefaultText>다음으로</DefaultText>
        </Button>
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

const Button = styled.TouchableOpacity<{ isWrite: boolean }>`
  padding: 12px 0px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isWrite ? '#65BFC4' : '#dbdbdb')};
  margin-bottom: 40px;
  border-radius: 50px;
`;

const DefaultText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;
