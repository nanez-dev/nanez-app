import React from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const RegisterPage = () => {
  return (
    <>
      <ProgressBar step={1} totalStep={6} />
      <Container>
        <Text>Register Page</Text>
      </Container>
    </>
  );
};

export default RegisterPage;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
