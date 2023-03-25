import React, { memo } from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Container, BrandImage } from './BrandCard.styles';

interface IProps {
  item: {
    image: string;
    name: string;
  };
}

const BrandCard = ({ item }: IProps) => {
  return (
    <Container>
      <BrandImage>
        <FastImage
          style={{ width: 90, height: 48 }}
          resizeMode={'contain'}
          source={{ uri: item.image }}
        />
      </BrandImage>
      <Text>{item.name}</Text>
    </Container>
  );
};

export default memo(BrandCard);
