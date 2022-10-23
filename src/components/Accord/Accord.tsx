import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header, Title, ShowAll } from './Accord.styles';
import { useQuery } from '@tanstack/react-query';
import API from '../../apis/apis';
import AccordCard from '../@shared/AccordCard/AccordCard';
import { useNavigation } from '@react-navigation/native';

interface IRecommendAccord {
  title: string;
  text?: string;
}

const RecommendAccord = ({ title, text }: IRecommendAccord) => {
  const navigation = useNavigation();
  const goToAccord = () => {
    //@ts-ignore
    navigation.navigate('Accord', {
      screen: 'AccordPage',
    });
  };
  const { isLoading: accordLoading, data: accordData } = useQuery(['perfume'], API.getAllAccords);

  return accordLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={{ marginBottom: 24 }}>
      <Header>
        <Title>{title}</Title>
        <ShowAll>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={goToAccord}>
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
      <FlatList<{ image: string; kor: string }>
        data={accordData.accords}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        renderItem={({ item }) => <AccordCard item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default RecommendAccord;
