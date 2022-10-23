import React from 'react';
import { Dimensions, ImageSourcePropType, ViewStyle } from 'react-native';
import { PageItem, Banner } from './CarouselCard.styles';
import Swiper from 'react-native-swiper';

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
