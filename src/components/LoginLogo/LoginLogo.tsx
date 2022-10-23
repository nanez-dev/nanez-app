import React from 'react';
import FastImage from 'react-native-fast-image';
import { Container, Title } from './LoginLogo.styles';

const LoginLogo = () => {
  return (
    <Container>
      <FastImage
        source={require('../../assets/images/login_logo.png')}
        style={{ width: 175, height: 100 }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Title>향수 통합 플랫폼</Title>
    </Container>
  );
};

export default LoginLogo;
