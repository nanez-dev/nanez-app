import React from 'react';
import { Container, Label, Input } from './RegisterEventInput.styles';

interface IRegisertEventInput {
  label: string;
  placeholder: string;
  code: string;
  handleCodeValue: (text: string) => void;
}

const RegisterEventInput = ({ label, placeholder, code, handleCodeValue }: IRegisertEventInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        placeholderTextColor={'#999999'}
        placeholder={placeholder}
        value={code}
        onChangeText={handleCodeValue}
      />
    </Container>
  );
};

export default RegisterEventInput;
