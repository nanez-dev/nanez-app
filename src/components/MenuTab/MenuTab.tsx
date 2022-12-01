import React from 'react';
import { Text, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { styles } from './MenuTab.styles';

interface IMenuTabProps {
  source: number | Source | undefined;
  title: string;
}

const MenuTab = ({ source, title }: IMenuTabProps) => {
  return (
    <View style={styles.container}>
      <FastImage source={source} style={styles.iconImage} />
      <Text style={styles.tabName}>{title}</Text>
    </View>
  );
};

export default MenuTab;
