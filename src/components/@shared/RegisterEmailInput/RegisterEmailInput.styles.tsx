import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Label = styled.Text`
  align-items: flex-start;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  background-color: #fafafd;
  width: 100%;
  padding: 14px 20px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 20px;
  margin-bottom: 8px;
` as unknown as typeof TextInput;

const AuthButton = styled.TouchableOpacity`
  background-color: #65bfc4;
  width: 100%;
  line-height: 18px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  padding: 12px 17px;
  margin-top: 8px;
` as unknown as typeof TouchableOpacity;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export { Container, Label, Input, AuthButton, ButtonText };
