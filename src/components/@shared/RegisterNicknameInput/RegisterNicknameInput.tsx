import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import API from '../../../apis/apis';
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
  const [isOverlap, setIsOverlap] = useState(false);

  const { mutate } = useMutation(() => API.postNicknameVerify(nickname), {
    onSuccess: (item: boolean) => {
      setIsOverlap(item);
      if (item === false) {
        Alert.alert('중복입니다.');
      } else {
        Alert.alert('사용 가능합니다.');
      }
    },
  });

  useEffect(() => {
    if (nickname.length > 0 && isOverlap === true) {
      setIsWrite(true);
    } else {
      setIsWrite(false);
    }
  }, [nickname, isOverlap]);
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
      <TouchableOpacity
        style={{ position: 'absolute', top: 38, right: 12, zIndex: 5 }}
        onPress={() => mutate()}
      >
        <Text style={{ color: '#1890FF' }}>중복확인</Text>
      </TouchableOpacity>
      <NextButton onPress={isWrite ? goToNext : null} isWrite={isWrite}>
        <ButtonText>정했어요!</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterNicknameInput;
