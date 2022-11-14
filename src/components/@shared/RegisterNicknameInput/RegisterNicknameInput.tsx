import React, { useEffect, useState } from 'react';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterNicknameInput.styles';

interface IRegisterNicknameInput {
  label: string;
  placeholder: string;
  nickname: string;
  handleNicknameValue: (text: string) => void;
  goToNext: () => void;
}

const RegisterNicknameInput = ({
  label,
  placeholder,
  nickname,
  handleNicknameValue,
  goToNext,
}: IRegisterNicknameInput) => {
  useEffect(() => {
    if (nickname.length > 0) {
      setIsWrite(true);
    } else {
      setIsWrite(false);
    }
  }, [nickname]);
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
        value={nickname}
        onChangeText={handleNicknameValue}
      />
      <NextButton onPress={isWrite ? goToNext : null} isWrite={isWrite}>
        <ButtonText>정했어요!</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterNicknameInput;
