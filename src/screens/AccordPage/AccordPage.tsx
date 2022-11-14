import React from 'react';
import styled from 'styled-components/native';
import RecommendAccord from '../../components/Accord/Accord';
import API from '../../apis/apis';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import FlexBox from '../../components/@shared/FlexBox/FlexBox';
import COLORS from '../../constants/colors';

export interface IAccords {
  accords: IAccord[];
}

export interface IAccord {
  eng: string;
  id: number;
  image: string;
  kor: string;
}

const AccordPage = () => {
  const { isLoading, data } = useQuery<IAccords>(['accord'], API.getAllAccords);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Container>
      <View style={{ borderBottomColor: COLORS.BORDER_COLOR, borderBottomWidth: 1 }}>
        <RecommendAccord title="지금 계절에 어울리는 어코드" />
      </View>
      <Grid
        data={data?.accords}
        numColumns={5}
        keyExtractor={(item: IAccord) => item.id}
        columnWrapperStyle={{
          padding: 13,
        }}
        renderItem={({ item }: { item: IAccord }) => (
          <View style={{ flex: 0.2, alignItems: 'center' }}>
            <Image
              style={{ width: 80, height: 48 }}
              resizeMode={'contain'}
              source={{ uri: item.image }}
            />
            <FlexBox justifyContent="center" alignItems="center">
              <Text>{item.kor}</Text>
            </FlexBox>
          </View>
        )}
      />
    </Container>
  );
};

export default AccordPage;

const Container = styled.View`
  padding-top: 20px;
  background-color: white;
  height: 100%;
`;

const Grid = styled.FlatList``;
