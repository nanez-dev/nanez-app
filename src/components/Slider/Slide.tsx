import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Slide = ({ banner }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <BgImg source={{ uri: banner }} />
    </View>
  );
};

export default Slide;

const BgImg = styled.Image`
  width: 100%;
  height: 200px;
`;
