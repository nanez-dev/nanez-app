import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Alert, FlatList } from 'react-native';
import API from '../../apis/apis';
import RecommendCard from '../@shared/RecommendCard/RecommendCard';
import { Container, Title } from './Recommend.styles';

// const imagePath1 = require('../../assets/images/perfume01.png');
// const imagePath2 = require('../../assets/images/perfume02.png');
// const imagePath3 = require('../../assets/images/perfume03.png');

export interface IData {
  id: number;
  brand: {
    kor: string;
  };
  kor: string;
  image: string;
}

// const data: IData[] = [
//   {
//     brand: '킬리안',
//     kor: '애플 브랜디 온 더 락스',
//     eng: 'Apple Brandy on the Rocks',
//     volume: '50ml',
//     cost: 90000,
//     img: imagePath1,
//   },
//   {
//     brand: '딥디크',
//     kor: '오듀엘르 오 드 뚜왈렛',
//     eng: 'eau de toilette eau de toilette',
//     volume: '50ml',
//     cost: 100000,
//     img: imagePath2,
//   },
//   {
//     brand: '조말론',
//     kor: '블랙베리 앤 베이',
//     eng: 'BlackBerry & Bay',
//     volume: '50ml',
//     cost: 120000,
//     img: imagePath3,
//   },
//   {
//     brand: '킬리안',
//     kor: '애플 브랜디 온 더 락스',
//     eng: 'Apple Brandy on the Rocks',
//     volume: '100ml',
//     cost: 120000,
//     img: imagePath1,
//   },
//   {
//     brand: '딥디크',
//     kor: '오듀엘르 오 드 뚜왈렛',
//     eng: 'eau de toilette eau de toilette',
//     volume: '100ml',
//     cost: 130000,
//     img: imagePath2,
//   },
//   {
//     brand: '조말론',
//     kor: '블랙베리 앤 베이',
//     eng: 'BlackBerry & Bay',
//     volume: '100ml',
//     cost: 150000,
//     img: imagePath3,
//   },
// ];

const Recommend = () => {
  const { data } = useQuery(['perfume'], () => API.getPerfume(), {
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
