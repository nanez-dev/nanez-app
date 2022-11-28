import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import RegisterAgeInput from '../../components/@shared/RegisterAgeInput/RegisterAgeInput';

type OnboardingAgeScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingAge'>;
const OnboardingAge = ({ navigation: { navigate }, route }: OnboardingAgeScreenProps) => {
  const [selectedAge, setSelectedAge] = useState('7');

  const handleSelectedAge = (text: string) => {
    setSelectedAge(text);
  };

  const goToNext = () => {
    navigate('OnboardingNickname', {
      selectedAge,
      ...route.params,
    });
  };

  return (
    <>
      <ProgressBar step={5} totalStep={8} />
      <Container>
        <RegisterHeader title={'연령대를 \n선택해주세요'} subtitle="향수 추천에 사용됩니다." />
        <RegisterAgeInput
          label="연령대"
          selectedAge={selectedAge}
          handleSelectedAge={handleSelectedAge}
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingAge;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
