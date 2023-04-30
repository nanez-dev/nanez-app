import React, { useEffect, useState } from 'react';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterPwInput.styles';

export interface IRegisterPwInput {
  label?: string;
  placeholder: string;
  rePlaceholder?: string;
  password: string;
  handlePasswordValue: (text: string) => void;
  goToNext: () => void;
}

const RegisterPwInput = ({
  label,
  placeholder,
  rePlaceholder,
  password,
  handlePasswordValue,
  goToNext,
}: IRegisterPwInput) => {
  useEffect(() => {
    if (password.length > 7) {
      setIsWrite(true);
    } else {
      setIsWrite(false);
    }
  }, [password]);
  const [isWrite, setIsWrite] = useState(false);
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
        value={password}
        onChangeText={handlePasswordValue}
        secureTextEntry={true}
      />
      <NextButton onPress={isWrite ? goToNext : null} isWrite={isWrite}>
        <ButtonText>다음으로</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterPwInput;
