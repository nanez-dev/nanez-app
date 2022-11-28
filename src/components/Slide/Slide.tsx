import React from 'react';
import { Dimensions } from 'react-native';
import { Container, Wrapper } from './Slide.styles';
import FastImage, { Source } from 'react-native-fast-image';

const Slide = ({ bannerPath }: { bannerPath: Source }) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <Container style={{ flex: 1 }}>
      <Wrapper>
        <FastImage source={bannerPath} style={{ width: screenWidth, height: 240 }} />
      </Wrapper>
    </Container>
  );
};

export default Slide;
