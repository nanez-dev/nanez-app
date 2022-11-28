import React from 'react';
import FastImage from 'react-native-fast-image';

const LogoTitle = () => {
  const headerLogo = require('../../assets/images/headerLogo.png');
  return <FastImage style={{ width: 120, height: 30 }} source={headerLogo} />;
};

export default LogoTitle;
