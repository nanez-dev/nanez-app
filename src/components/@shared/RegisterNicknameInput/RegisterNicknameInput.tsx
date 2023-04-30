import { useMutation } from '@tanstack/react-query';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import API from '../../../apis/apis';
import { Container, Label, Input } from './RegisterNicknameInput.styles';

interface IRegisterNicknameInput {
  label: string;
  placeholder: string;
  nickname: string;
  handleNicknameValue: (text: string) => void;
  goToNext: () => void;
  setIsWrite: Dispatch<SetStateAction<boolean>>;
  checkPass: boolean;
  setCheckPass: Dispatch<SetStateAction<boolean>>;
}

const RegisterNicknameInput = ({
  label,
  placeholder,
  nickname,
  handleNicknameValue,
  setIsWrite,
  checkPass,
}: IRegisterNicknameInput) => {
  const { mutate } = useMutation(() => API.postNicknameVerify(nickname), {
    onSuccess: (res) => {
      if (res.detail === 'INVALID_NICKNAME') {
        Alert.alert('입력된 값이 없습니다.');
      }
      if (res) {
        Alert.alert('사용 가능합니다.');
        setIsWrite(true);
      } else {
        Alert.alert('중복입니다.');
      }
    },
  });

  useEffect(() => {
    if (nickname.length > 0 && checkPass === true) {
      setIsWrite(true);
    } else {
      setIsWrite(false);
    }
  }, [nickname, checkPass]);

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
    </Container>
  );
};

export default RegisterNicknameInput;
