import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin: 20px 0px; ;
`;

const SearchBox = styled.View`
  width: 90%;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
`;

const SearchText = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-left: 8px;
`;

export { SearchBox, SearchText, Container };
