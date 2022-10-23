import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import RecommendCard from '../@shared/RecommendCard/RecommendCard';
import { Container, Title } from './Recommend.styles';

const imagePath1 = require('../../assets/images/perfume01.png');
const imagePath2 = require('../../assets/images/perfume02.png');
const imagePath3 = require('../../assets/images/perfume03.png');

export interface IData {
  brand: string;
  kor: string;
  eng: string;
  volume: string;
  cost: number;
  img: ImageSourcePropType;
}

const data: IData[] = [
  {
    brand: '킬리안',
    kor: '애플 브랜디 온 더 락스',
    eng: 'Apple Brandy on the Rocks',
    volume: '50ml',
    cost: 90000,
    img: imagePath1,
  },
  {
    brand: '딥디크',
    kor: '오듀엘르 오 드 뚜왈렛',
    eng: 'eau de toilette eau de toilette',
    volume: '50ml',
    cost: 100000,
    img: imagePath2,
  },
  {
    brand: '조말론',
    kor: '블랙베리 앤 베이',
    eng: 'BlackBerry & Bay',
    volume: '50ml',
    cost: 120000,
    img: imagePath3,
  },
  {
    brand: '킬리안',
    kor: '애플 브랜디 온 더 락스',
    eng: 'Apple Brandy on the Rocks',
    volume: '100ml',
    cost: 120000,
    img: imagePath1,
  },
  {
    brand: '딥디크',
    kor: '오듀엘르 오 드 뚜왈렛',
    eng: 'eau de toilette eau de toilette',
    volume: '100ml',
    cost: 130000,
    img: imagePath2,
  },
  {
    brand: '조말론',
    kor: '블랙베리 앤 베이',
    eng: 'BlackBerry & Bay',
    volume: '100ml',
    cost: 150000,
    img: imagePath3,
  },
];

const Recommend = () => {
  return (
    <Container>
      <Title>이런 향수는 어떠세요?</Title>
      <FlatList<IData>
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: IData }) => {
          return <RecommendCard item={item} />;
        }}
      />
    </Container>
  );
};

export default Recommend;
