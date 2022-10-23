import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import styled from 'styled-components/native';
import FlexBox from '../../components/@shared/FlexBox/FlexBox';
import RecommendBrand from '../../components/Brand/Brand';
import perfumeData from '../../mocks/perfume';
import COLORS from '../../constants/colors';

interface IBrand {
  image: ImageSourcePropType;
  name: string;
  enName: string;
  id: number;
}

const BrandPage = () => {
  return (
    <Container>
      <View style={{ borderBottomColor: COLORS.BORDER_COLOR, borderBottomWidth: 1 }}>
        <RecommendBrand title="지금 사랑받고 있는 브랜드" />
      </View>
      <Grid
        data={perfumeData}
        keyExtractor={(item: IBrand) => item.id}
        renderItem={({ item }: { item: IBrand }) => (
          <GridContainer>
            <FlexBox flexDirection="row" alignItems="center">
              <ImageWrapper>
                <Image
                  style={{ width: 50, height: 48 }}
                  resizeMode={'contain'}
                  source={item.image}
                />
              </ImageWrapper>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.enName}</Text>
              </View>
            </FlexBox>
          </GridContainer>
        )}
      />
    </Container>
  );
};

export default BrandPage;

const Container = styled.View`
  padding-top: 20px;
  background-color: white;
  height: 100%;
`;

const Grid = styled.FlatList``;

const GridContainer = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.BORDER_COLOR};
`;

const ImageWrapper = styled.View`
  padding: 0px 10px;
  border: 1px solid ${COLORS.BORDER_COLOR};
  border-radius: 8px;
  margin-right: 20px;
`;
