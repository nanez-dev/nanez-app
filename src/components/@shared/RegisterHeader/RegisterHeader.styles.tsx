import styled from 'styled-components/native';

const Container = styled.View``;

const Title = styled.Text<{ type: string }>`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: ${(props) => (props.type === 'result' ? 'center' : 'left')};
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin-top: 8px;
`;

export { Container, Title, Subtitle };
