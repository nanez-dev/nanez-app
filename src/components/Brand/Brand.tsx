import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BrandCard from '../@shared/BrandCard/BrandCard';
import { Header, Title, ShowAll } from './Brand.styles';
import { useNavigation } from '@react-navigation/native';

import { useQuery } from '@tanstack/react-query';
import API from '../../apis/apis';

interface IRecommendBrand {
  title: string;
  text?: string;
}

const RecommendBrand = ({ title, text }: IRecommendBrand) => {
  const { data } = useQuery(['brand'], API.getPopularBrand);
  const navigation = useNavigation();
  const goToBrand = () => {
    //@ts-ignore
    navigation.navigate('Brand');
  };
  return (
    <View style={{ marginBottom: 24 }}>
      <Header>
        <Title>{title}</Title>
        <ShowAll>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={goToBrand}>
              <Text style={{ fontSize: 12, color: '#333333' }}>{text}</Text>
            </TouchableOpacity>
            {text ? (
              <Ionicons
                name="chevron-forward-outline"
                size={14}
                color="#333333"
                style={{ marginLeft: 4 }}
              />
            ) : null}
          </View>
        </ShowAll>
      </Header>
      <FlatList
        data={data.brands}
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <BrandCard item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default RecommendBrand;
