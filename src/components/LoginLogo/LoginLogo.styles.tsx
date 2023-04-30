import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 175px;
  height: 100px;
` as unknown as typeof FastImage;

export { Container, LogoImage };
