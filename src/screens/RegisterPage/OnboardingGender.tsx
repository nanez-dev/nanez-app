import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import RegisterGenderInput from '../../components/@shared/RegisterGenderInput/RegisterGenderInput';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  ButtonText,
  NextButton,
} from '../../components/@shared/RegisterGenderInput/RegisterGenderInput.styles';

type OnboardingGenderScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingGender'>;
const OnboardingGender = ({ navigation: { navigate }, route }: OnboardingGenderScreenProps) => {
  const [selectedGender, setSelectedGender] = useState('F');

  const handleSelectedGender = (text: string) => {
    setSelectedGender(text);
  };

  const goToNext = () => {
    navigate('OnboardingAge', {
      selectedGender,
      ...route.params,
    });
  };

  return (
    <>
      <ProgressBar step={4} totalStep={8} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RegisterHeader title={'성별을\n선택해주세요!'} subtitle={'향수 추천에 사용됩니다'} />
          <RegisterGenderInput
            handleSelectedGender={handleSelectedGender}
            selectedGender={selectedGender}
            label="성별"
            goToNext={goToNext}
          />
          <NextButton onPress={goToNext}>
            <ButtonText>다음으로</ButtonText>
          </NextButton>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OnboardingGender;

const Container = styled.View`
  padding: 26px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
