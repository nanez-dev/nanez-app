import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';

type OnboardingResultScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingResult'>;
const OnboardingResult = ({ navigation: { navigate }, route }: OnboardingResultScreenProps) => {
  console.log(route.params);
  return (
    <>
      <ProgressBar step={8} totalStep={8} />
      <Container />
    </>
  );
};

export default OnboardingResult;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
