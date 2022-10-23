import React from 'react';
import { Image, ImageSourcePropType, Text } from 'react-native';
import { Container, BrandImage } from './BrandCard.styles';

interface IProps {
  item: {
    image: ImageSourcePropType;
    name: string;
  };
}

const BrandCard = ({ item }: IProps) => {
  return (
    <Container>
      <BrandImage>
        <Image style={{ width: 90, height: 48 }} resizeMode={'contain'} source={item.image} />
      </BrandImage>
      <Text>{item.name}</Text>
    </Container>
  );
};

export default BrandCard;
