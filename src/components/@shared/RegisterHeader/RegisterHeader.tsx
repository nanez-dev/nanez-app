import React from 'react';
import { Container, Title, Subtitle } from './RegisterHeader.styles';

interface IRegisterHeader {
  title: string;
  subtitle?: string;
}

const RegisterHeader = ({ title, subtitle }: IRegisterHeader) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default RegisterHeader;
