import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ServiceWrapper, Title } from './ServiceTab.styles';

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
    <ServiceWrapper onPress={goToMyPageList}>
      <Ionicons name={icon} size={20} color="#666666" />
      <Title>{title}</Title>
    </ServiceWrapper>
  );
};

export default ServiceTab;
