import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Alert, FlatList } from 'react-native';
import API from '../../apis/apis';
import RecommendCard from '../@shared/RecommendCard/RecommendCard';
import { Container, Title } from './Recommend.styles';

export interface IData {
  id: number;
  brand: {
    kor: string;
  };
  kor: string;
  image: string;
}

const Recommend = () => {
  const { data } = useQuery(['perfume'], () => API.getPerfume('조말론'), {
    onError: () => {
      Alert.alert('데이터가 없습니다.');
    },
  });

  return (
    <Container>
      <Title>이런 향수는 어떠세요?</Title>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        horizontal
        data={data.perfumes}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: IData }) => {
          return <RecommendCard item={item} />;
        }}
      />
    </Container>
  );
};

export default Recommend;
