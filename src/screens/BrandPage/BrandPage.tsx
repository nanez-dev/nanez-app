import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import FlexBox from '../../components/@shared/FlexBox/FlexBox';
import RecommendBrand from '../../components/Brand/Brand';
import COLORS from '../../constants/colors';
import { useQuery } from '@tanstack/react-query';
import API from '../../apis/apis';
import FastImage from 'react-native-fast-image';

interface IBrand {
  image: string;
  kor: string;
  eng: string;
  id: number;
}

const BrandPage = () => {
  const { data } = useQuery(['brand'], API.getAllBrands);
  return (
    <Container>
      <View style={{ borderBottomColor: COLORS.BORDER_COLOR, borderBottomWidth: 1 }}>
        <RecommendBrand title="지금 사랑받고 있는 브랜드" />
      </View>
      <Grid
        data={data.brands}
        keyExtractor={(item: IBrand) => item.id}
        renderItem={({ item }: { item: IBrand }) => (
          <GridContainer>
            <FlexBox flexDirection="row" alignItems="center">
              <ImageWrapper>
                <FastImage
                  style={{ width: 50, height: 48 }}
                  resizeMode={'contain'}
                  source={{ uri: item.image }}
                />
              </ImageWrapper>
              <View>
                <Text style={{ fontSize: 12 }}>{item.kor}</Text>
                <Text>{item.eng}</Text>
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
