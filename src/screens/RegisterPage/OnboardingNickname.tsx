import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';

type OnboardingNicknameScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingNickname'>;
const OnboardingNickname = ({ navigation: { navigate }, route }: OnboardingNicknameScreenProps) => {
  return (
    <>
      <Container>
        <RegisterHeader title={'나네에서 부를\n이름을 정해주세요!'} subtitle="별명도 좋아요" />
      </Container>
    </>
  );
};

export default OnboardingNickname;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
