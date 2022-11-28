import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 60px;
`;

const SearchBox = styled.View`
  width: 90%;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  padding: 0px 8px;
  margin-bottom: 22px;
  flex-direction: row;
  align-items: center;
`;

const SearchTextInput = styled.TextInput`
  font-size: 14px;
  color: #999999;
  margin-left: 8px;
` as unknown as typeof TextInput;

export { SearchBox, SearchTextInput, Container };
