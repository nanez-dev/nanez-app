import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container } from './RegisterBtn.styles';

interface IRegisterBtn {
  onPress: () => void;
}

const RegisterBtn = ({ onPress }: IRegisterBtn) => {
  return (
    <Container>
      <Text>나네를 아직 시작하지 않으셨나요?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>회원가입</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default RegisterBtn;
