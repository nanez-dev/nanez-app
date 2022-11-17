import React from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';
import { PageItem, Banner } from './CarouselCard.styles';

interface IProps {
  item: {
    value: string;
    img: ImageSourcePropType;
  };
  style: ViewStyle;
}

const CarouselCard = ({ item, style }: IProps) => {
  return (
    <PageItem style={style}>
      <Banner source={item.img} />
    </PageItem>
  );
};

export default CarouselCard;
