import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-width: 1px;
  border-color: #efefef;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: #65bfc4;
`;

const BtnContent = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

export { Container, Btn, BtnContent };
