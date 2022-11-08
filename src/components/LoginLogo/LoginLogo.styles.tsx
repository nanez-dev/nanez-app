import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 10px;
  font-size: 11px;
`;

const LogoImage = styled.Image`
  width: 175px;
  height: 100px;
` as unknown as typeof FastImage;

export { Container, Title, LogoImage };
