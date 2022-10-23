import React from 'react';
import { Image, ImageSourcePropType, Text } from 'react-native';
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
        <Image
          style={{ width: 90, height: 48 }}
          resizeMode={'contain'}
          source={{ uri: item.image }}
        />
      </AccordImage>
      <Text>{item.kor}</Text>
    </Container>
  );
};

export default AccordCard;
