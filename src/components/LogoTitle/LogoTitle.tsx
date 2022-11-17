import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
  const headerLogo = require('../../assets/images/headerLogo.png');
  return <Image style={{ width: 120, height: 30 }} source={headerLogo} />;
};

export default LogoTitle;
