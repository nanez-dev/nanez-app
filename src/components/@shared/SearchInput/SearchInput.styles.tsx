import { TextInput, View } from 'react-native';
import { CSSProperties } from 'styled-components';
import styled from 'styled-components/native';

const Wrap = styled.View<CSSProperties>`
  align-items: center;
  margin-top: 30px;
` as unknown as typeof View;

const SearchBox = styled.View<CSSProperties>`
  width: 90%;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
` as unknown as typeof View;

const SearchText = styled.TextInput<CSSProperties>`
  font-size: 14px;
  color: black;
  margin-left: 8px;
` as unknown as typeof TextInput;

export { SearchBox, SearchText, Wrap };
