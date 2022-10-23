import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const LoginPage = () => {
  return (
    <Container>
      <Text>Login Page</Text>
    </Container>
  );
};

export default LoginPage;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
