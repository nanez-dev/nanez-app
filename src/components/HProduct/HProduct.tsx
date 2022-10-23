import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Poster, Container } from './HProduct.styles';

const HProduct = ({ posterPath }: any) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster source={{ uri: posterPath }} style={{ width: 100, height: 100 }} />
      </Container>
    </TouchableOpacity>
  );
};

export default memo(HProduct);
