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
`;

const Input = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;

const NextButton = styled.TouchableOpacity`
  background-color: #65bfc4;
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  margin-top: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

export { Container, Label, Input, NextButton, ButtonText };
