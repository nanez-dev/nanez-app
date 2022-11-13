import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';

type OnboardingAccordScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingAccord'>;
const OnboardingAccord = ({ navigation: { navigate }, route }: OnboardingAccordScreenProps) => {
  return (
    <>
      <ProgressBar step={7} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'마지막 질문!\n좋아하는 향 있어요?'}
          subtitle="가장 취향에 맞는 향을 한 가지만 선택해주세요."
        />
      </Container>
    </>
  );
};

export default OnboardingAccord;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
