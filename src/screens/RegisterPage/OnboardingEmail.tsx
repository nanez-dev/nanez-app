import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';

const OnboardingEmail = () => {
  return (
    <>
      <ProgressBar step={2} totalStep={6} />
      <Container>
        <Text style={{ fontSize: 32, fontWeight: '700', lineHeight: 40 }}>
          로그인에 사용할{'\n'}이메일을 입력해주세요!
        </Text>
      </Container>
    </>
  );
};

export default OnboardingEmail;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
