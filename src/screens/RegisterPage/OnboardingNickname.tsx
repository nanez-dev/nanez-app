import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import RegisterNicknameInput from '../../components/@shared/RegisterNicknameInput/RegisterNicknameInput';
import {
  ButtonText,
  NextButton,
} from '../../components/@shared/RegisterNicknameInput/RegisterNicknameInput.styles';

type OnboardingNicknameScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingNickname'>;
const OnboardingNickname = ({ navigation: { navigate }, route }: OnboardingNicknameScreenProps) => {
  const [nickname, setNickname] = useState('');
  const [isWrite, setIsWrite] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  const handleNicknameValue = (text: string) => {
    setNickname(text);
  };

  const goToNext = () => {
    if (nickname && checkPass) {
      navigate('OnboardingAccord', {
        nickname,
        ...route.params,
      });
    } else {
      Alert.alert('닉네임을 작성해주세요.');
    }
  };

  return (
    <>
      <ProgressBar step={6} totalStep={8} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RegisterHeader title={'나네에서 부를\n이름을 정해주세요!'} subtitle="별명도 좋아요" />
          <RegisterNicknameInput
            label="이름"
            placeholder="불리고 싶은 이름을 작성해주세요!"
            nickname={nickname}
            handleNicknameValue={handleNicknameValue}
            goToNext={goToNext}
            setIsWrite={setIsWrite}
            checkPass={checkPass}
            setCheckPass={setCheckPass}
          />
          <NextButton onPress={goToNext} isWrite={isWrite}>
            <ButtonText>다음으로</ButtonText>
          </NextButton>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OnboardingNickname;

const Container = styled.View`
  padding: 26px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
