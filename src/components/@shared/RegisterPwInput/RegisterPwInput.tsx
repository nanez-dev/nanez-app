import React from 'react';
import { Container, Label, Input } from './RegisterPwInput.styles';

export interface IRegisterPwInput {
  label?: string;
  placeholder: string;
  rePlaceholder?: string;
  password: string;
  rePassword: string;
  handlePasswordValue: (text: string) => void;
  handleRePasswordValue: (text: string) => void;
  goToNext: () => void;
}

const RegisterPwInput = ({
  label,
  placeholder,
  rePlaceholder,
  password,
  rePassword,
  handlePasswordValue,
  handleRePasswordValue,
}: IRegisterPwInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        placeholderTextColor={'#999999'}
        placeholder={placeholder}
        value={password}
        onChangeText={handlePasswordValue}
        secureTextEntry={true}
      />
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        placeholderTextColor={'#999999'}
        placeholder={rePlaceholder}
        value={rePassword}
        onChangeText={handleRePasswordValue}
        secureTextEntry={true}
      />
    </Container>
  );
};

export default RegisterPwInput;
