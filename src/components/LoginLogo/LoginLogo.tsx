import React from 'react';
import { Container } from './LoginLogo.styles';
import { WithLocalSvg } from 'react-native-svg';

const LoginLogo = () => {
  return (
    <Container>
      <WithLocalSvg
        asset={require('../../assets/images/auth_img/login_logo.svg')}
        width={175}
        height={100}
      />
    </Container>
  );
};

export default LoginLogo;
