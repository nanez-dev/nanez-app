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
  padding: 12px 16px;
  border-radius: 50px;
  margin-bottom: 8px;
`;

// export const Indicator = styled.View<{ focused: boolean }>`
//   margin: 0px 4px;
//   background-color: #333333;
//   opacity: ${(props) => (props.focused ? '1' : '0.5')};
//   width: ${(props) => (props.focused ? '12px' : '6px')};
//   height: 6px;
//   border-radius: 3px;
// `;

const NextButton = styled.TouchableOpacity<{ codeWrite: boolean }>`
  background-color: ${(props) => (props.codeWrite ? '#65bfc4' : '#cccccc')};
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
