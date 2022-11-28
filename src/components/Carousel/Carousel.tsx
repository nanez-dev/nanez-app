// 레거시
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import CarouselCard from '../@shared/CarouselCard/CarouselCard';
import { Container, Indicator, IndicatorWrapper } from './Carousel.styles';
const initialScreenWidth = Math.round(Dimensions.get('window').width);

interface IProps {
  pageWidth?: number;
  gap?: number;
  offset?: number;
  pages: {
    value: string;
    img: ImageSourcePropType;
  }[];
  onChange?: (page: number) => void;
}

const Carousel = ({
  pageWidth = initialScreenWidth,
  offset = 0,
  gap = 0,
  pages,
  onChange,
}: IProps) => {
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (pageWidth + gap));
    setPage(newPage);
    if (onChange) {
      onChange(newPage);
    }
  };
  const [page, setPage] = useState(0);
  return (
    <Container>
      <FlatList<{ img: ImageSourcePropType; value: string }>
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.value}`}
        onScroll={handleScroll}
        pagingEnabled
        renderItem={({ item }) => (
          <CarouselCard
            item={item}
            style={{
              width: pageWidth,
              marginHorizontal: gap / 2,
            }}
          />
        )}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />

      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default Carousel;
