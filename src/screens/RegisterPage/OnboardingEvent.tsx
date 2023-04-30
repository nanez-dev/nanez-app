import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterEventInput from '../../components/@shared/RegisterEventInput/RegitsterEventInput';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  ButtonText,
  NextButton,
} from '../../components/@shared/RegisterEventInput/RegisterEventInput.styles';

type OnboardingEventScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingEvent'>;
const OnboardingEvent = ({ navigation: { navigate }, route }: OnboardingEventScreenProps) => {
  const [code, setCode] = useState('');
  const [codeWrite, setCodeWrite] = useState(false);

  const handleCodeValue = (text: string) => {
    setCode(text);
  };

  const goToNext = () => {
    if (codeWrite) {
      navigate('OnboardingResult', {
        code,
        ...route.params,
      });
    } else {
      Alert.alert('입력된 값이 없습니다.');
    }
  };

  const goToPass = () => {
    navigate('OnboardingResult', {
      code,
      ...route.params,
    });
  };

  useEffect(() => {
    if (code.length > 0) {
      setCodeWrite(true);
    }
  }, [code]);
  return (
    <>
      <ProgressBar step={8} totalStep={8} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          />
          <NextButton onPress={goToNext} codeWrite={codeWrite}>
            <ButtonText>입력완료</ButtonText>
          </NextButton>
          <NextButton onPress={goToPass} codeWrite={true}>
            <ButtonText>건너뛰기</ButtonText>
          </NextButton>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OnboardingEvent;

const Container = styled.View`
  padding: 26px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
