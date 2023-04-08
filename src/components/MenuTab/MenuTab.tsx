import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import EncryptedStorage from 'react-native-encrypted-storage';
import { styles } from './MenuTab.styles';

interface IMenuTabProps {
  source: number | Source | undefined;
  title: string;
  screen: string;
}

const MenuTab = ({ source, title, screen }: IMenuTabProps) => {
  const navigation = useNavigation();
  const goToMenuList = async () => {
    const cookie = await EncryptedStorage.getItem('authCookie');
    if (cookie === undefined || cookie === null) {
      Alert.alert('로그인시 이용가능합니다.');
    } else {
      //@ts-ignore
      navigation.navigate(screen);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToMenuList}>
      <FastImage source={source} style={styles.iconImage} />
      <Text style={styles.tabName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuTab;
