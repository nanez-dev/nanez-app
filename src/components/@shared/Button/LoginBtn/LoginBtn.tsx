import React from 'react';
import { Text } from 'react-native';
import { Container, Btn, BtnContent } from './LoginBtn.styles';

interface ILoginBtn {
  onSubmitPasswordEditing: () => void;
}

const LoginBtn = ({ onSubmitPasswordEditing }: ILoginBtn) => {
  return (
    <Container>
      <Btn onPress={onSubmitPasswordEditing}>
        <BtnContent>로그인</BtnContent>
      </Btn>
      <Text>회원 정보를 잊으셨나요?</Text>
    </Container>
  );
};

export default LoginBtn;
