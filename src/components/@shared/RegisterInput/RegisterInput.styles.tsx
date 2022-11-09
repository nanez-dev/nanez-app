import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 70px;
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
  padding: 12px 16px;
  border-radius: 50px;
  margin-bottom: 8px;
` as unknown as typeof TextInput;

export { Container, Label, Input };
