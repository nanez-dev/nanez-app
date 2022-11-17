import styled from 'styled-components/native';

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-left: 24px;
  margin-right: 13px;
  margin-bottom: 16px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const ShowAll = styled.TouchableWithoutFeedback``;

export { Header, Title, ShowAll };
