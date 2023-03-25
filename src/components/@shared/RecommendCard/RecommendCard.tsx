import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { PerfumeImage, Card, Container, Brand, Name } from './RecommendCard.styles';

interface IData {
  id: number;
  brand: {
    kor: string;
  };
  kor: string;
  image: string;
}

const RecommendCard = ({ item }: { item: IData }) => {
  const { navigate } = useNavigation();
  const goToDetail = (id: number) => {
    //@ts-ignore
    navigate('PerfumeDetail', {
      id,
    });
  };

  return (
    <Container onPress={goToDetail.bind(this, item.id)}>
      <PerfumeImage source={{ uri: item.image }} />
      <Card>
        <Brand>{item.brand.kor}</Brand>
        <Name numberOfLines={2}>{item.kor}</Name>
      </Card>
    </Container>
  );
};

export default memo(RecommendCard);
