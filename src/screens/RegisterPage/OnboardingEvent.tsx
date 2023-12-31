import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterEventInput from '../../components/@shared/RegisterEventInput/RegitsterEventInput';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';

type OnboardingEventScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingEvent'>;
const OnboardingEvent = ({ navigation: { navigate }, route }: OnboardingEventScreenProps) => {
  const [code, setCode] = useState('');

  const handleCodeValue = (text: string) => {
    setCode(text);
  };

  const goToNext = () => {
    navigate('OnboardingResult', {
      code,
      ...route.params,
    });
  };
  return (
    <>
      <ProgressBar step={8} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'특별 이벤트 코드를\n입력해주세요!'}
          subtitle="가입 완료 시 자동으로 이벤트 참여 완료!"
        />
        <RegisterEventInput
          label="이벤트 코드 입력"
          placeholder="전달받으신 이벤트 코드를 입력해주세요."
          code={code}
          handleCodeValue={handleCodeValue}
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingEvent;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
