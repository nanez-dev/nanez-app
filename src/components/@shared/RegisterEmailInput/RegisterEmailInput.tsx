import React from 'react';
import { Container, Label, Input, AuthButton, ButtonText } from './RegisterEmailInput.styles';

interface IRegisterEmailInput {
  label: string;
  emailPlaceholder: string;
  authPlaceholder: string;
  emailValue: string;
  authValue: string;
  handleEmailValue: (text: string) => void;
  handleAuthValue: (text: string) => void;
  onSubmitEmail: () => void;
  onSubmitAuthNumber: () => void;
  emailAuth: boolean;
}

const RegisterEmailInput = ({
  label,
  emailPlaceholder,
  authPlaceholder,
  emailValue,
  authValue,
  handleEmailValue,
  handleAuthValue,
  onSubmitEmail,
  onSubmitAuthNumber,
  emailAuth,
}: IRegisterEmailInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        value={emailValue}
        onChangeText={handleEmailValue}
        placeholder={emailPlaceholder}
        placeholderTextColor={'#999999'}
        keyboardType="email-address"
      />
      {emailAuth && (
        <Input
          autoCapitalize="none"
          autoComplete={'off'}
          autoCorrect={false}
          value={authValue}
          onChangeText={handleAuthValue}
          placeholder={authPlaceholder}
          placeholderTextColor={'#999999'}
          keyboardType="email-address"
        />
      )}
      <AuthButton onPress={emailAuth ? onSubmitAuthNumber : onSubmitEmail}>
        <ButtonText>{emailAuth ? '인증번호 확인' : '인증번호 전송'}</ButtonText>
      </AuthButton>
    </Container>
  );
};

export default RegisterEmailInput;
