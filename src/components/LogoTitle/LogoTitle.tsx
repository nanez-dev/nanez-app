import React from 'react';
import FastImage from 'react-native-fast-image';
import { View } from 'react-native';
import { styles } from './LogoTitle.styles';

const LogoTitle = () => {
  const headerLogo = require('../../assets/images/headerLogo.png');
  return (
    <View style={styles.container}>
      <FastImage style={styles.logo} source={headerLogo} resizeMode="contain" />
    </View>
  );
};

export default LogoTitle;
