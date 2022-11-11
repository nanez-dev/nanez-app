import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import RegisterGenderInput from '../../components/@shared/RegisterGenderInput/RegisterGenderInput';

type OnboardingGenderScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingGender'>;
const OnboardingGender = ({ navigation: { navigate }, route }: OnboardingGenderScreenProps) => {
  const [selectedGender, setSelectedGender] = useState('');

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
      <ProgressBar step={4} totalStep={7} />
      <Container>
        <RegisterHeader title={'성별을\n선택해주세요!'} subtitle={'향수 추천에 사용됩니다'} />
        <RegisterGenderInput
          handleSelectedGender={handleSelectedGender}
          selectedGender={selectedGender}
          label="성별"
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingGender;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
