import styled from 'styled-components/native';

const Container = styled.View``;

const Title = styled.Text<{ type: string }>`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-align: ${(props) => (props.type === 'result' ? 'center' : 'left')};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin-top: 8px;
`;

export { Container, Title, Subtitle };
