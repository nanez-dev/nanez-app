import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const NoticePage = () => {
  return (
    <Container>
      <Text>Notice page</Text>
    </Container>
  );
};

export default NoticePage;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
