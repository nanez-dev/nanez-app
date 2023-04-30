import React from 'react';
import FastImage from 'react-native-fast-image';
import { Container, LogoImage } from './LoginLogo.styles';

const LoginLogo = () => {
  return (
    <Container>
      <LogoImage
        source={require('../../assets/images/auth_img/login_logo.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Container>
  );
};

export default LoginLogo;
