import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { PerfumeImage, Card, Container, Brand, Name } from './RecommendCard.styles';

interface IData {
  brand: string;
  kor: string;
  eng: string;
  volume: string;
  cost: number;
  img: ImageSourcePropType;
}

const RecommendCard = ({ item }: { item: IData }) => {
  const { navigate } = useNavigation();
  const goToDetail = () => {
    //@ts-ignore
    navigate('PerfumeDetail', {
      ...item,
    });
  };
  return (
    <Container onPress={goToDetail}>
      <PerfumeImage source={item.img} />
      <Card>
        <Brand>{item.brand}</Brand>
        <Name numberOfLines={2}>{item.kor}</Name>
      </Card>
    </Container>
  );
};

export default RecommendCard;
