import React from 'react';
import styled from 'styled-components/native';
import { Container, Title, Subtitle } from './RegisterHeader.styles';

interface IRegisterHeader {
  title: string;
  subtitle?: string;
  type?: string;
}

const RegisterHeader = ({ title, subtitle, type }: IRegisterHeader) => {
  return type !== 'result' ? (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  ) : (
    <ResultContainer>
      <Title type={type}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ResultContainer>
  );
};

export default RegisterHeader;

const ResultContainer = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: center;
`;
