import React from 'react';
import FastImage from 'react-native-fast-image';
import { Container, Title, LogoImage } from './LoginLogo.styles';

const LoginLogo = () => {
  return (
    <Container>
      <LogoImage
        source={require('../../assets/images/auth_img/login_logo.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Title>향수 통합 플랫폼</Title>
    </Container>
  );
};

export default LoginLogo;
