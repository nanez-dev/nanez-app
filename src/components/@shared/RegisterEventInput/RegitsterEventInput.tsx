import React from 'react';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterEventInput.styles';

interface IRegisertEventInput {
  label: string;
  placeholder: string;
  code: string;
  handleCodeValue: (text: string) => void;
  goToNext: () => void;
}

const RegisterEventInput = ({
  label,
  placeholder,
  code,
  handleCodeValue,
  goToNext,
}: IRegisertEventInput) => {
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
      <NextButton onPress={goToNext}>
        <ButtonText>입력완료</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterEventInput;
