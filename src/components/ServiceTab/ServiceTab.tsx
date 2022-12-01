import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ServiceTab.styles';

interface IServiceTabProps {
  icon: keyof typeof Ionicons.glyphMap;
  screen: string;
  title: string;
}

const ServiceTab = ({ icon, screen, title }: IServiceTabProps) => {
  const navigation = useNavigation();
  const goToMyPageList = () => {
    //@ts-ignore
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity style={styles.touchContainer} onPress={goToMyPageList}>
      <Ionicons name={icon} size={20} color="#666666" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServiceTab;
