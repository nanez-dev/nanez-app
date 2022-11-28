import React from 'react';
import FastImage from 'react-native-fast-image';

const LogoTitle = () => {
  const headerLogo = require('../../assets/images/headerLogo.png');
  return <FastImage style={{ width: 100, height: 25 }} source={headerLogo} resizeMode="contain" />;
};

export default LogoTitle;
