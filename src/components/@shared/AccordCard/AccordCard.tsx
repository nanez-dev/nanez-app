import React, { memo } from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Container, AccordImage } from './AccordCard.styles';

interface IProps {
  item: {
    image: string;
    kor: string;
  };
}

const AccordCard = ({ item }: IProps) => {
  return (
    <Container>
      <AccordImage>
        <FastImage
          style={{ width: 90, height: 48 }}
          resizeMode={'contain'}
          source={{ uri: item.image }}
        />
      </AccordImage>
      <Text>{item.kor}</Text>
    </Container>
  );
};

export default memo(AccordCard);
