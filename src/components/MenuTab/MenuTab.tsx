import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { styles } from './MenuTab.styles';

interface IMenuTabProps {
  source: number | Source | undefined;
  title: string;
  screen: string;
}

const MenuTab = ({ source, title, screen }: IMenuTabProps) => {
  const navigation = useNavigation();
  const goToMenuList = () => {
    //@ts-ignore
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToMenuList}>
      <FastImage source={source} style={styles.iconImage} />
      <Text style={styles.tabName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuTab;
