import React from 'react';
import { FlatList, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BrandCard from '../@shared/BrandCard/BrandCard';
import { Header, Title, ShowAll } from './Brand.styles';
import { useNavigation } from '@react-navigation/native';

// perfume mock data
import perfumeData from '../../mocks/perfume';

interface IRecommendBrand {
  title: string;
  text?: string;
}

const RecommendBrand = ({ title, text }: IRecommendBrand) => {
  const navigation = useNavigation();
  const goToBrand = () => {
    //@ts-ignore
    navigation.navigate('Brand', {
      screen: 'BrandPage',
    });
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
      <FlatList<{ image: ImageSourcePropType; name: string; id: number }>
        data={perfumeData}
        contentContainerStyle={{
          paddingHorizontal: 12,
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
