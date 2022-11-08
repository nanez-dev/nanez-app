import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import BannerContent from '../../components/@shared/BannerContet/BannerContent';
import Carousel from '../../components/Carousel/Carousel';
import Recommend from '../../components/Recommend/Recommend';
import RecommendBrand from '../../components/Brand/Brand';
import ProductAddButton from '../../components/@shared/Button/ProductAddButton/ProductAddButton';

import RecommendAccord from '../../components/Accord/Accord';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

const imagePath = require('../../assets/images/banner.png');

// const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;
const Home = ({ navigation: { navigate } }: HomeScreenProps) => {
  const month = new Date().getMonth() + 1;
  const [bannerPage, setBannerPage] = useState(0);
  console.log(bannerPage);

  const pages = Array.from({ length: 5 }, (_, i) => ({
    value: 'carousel_' + String(i),
    img: imagePath,
  }));

  // const { isLoading: allPerfumeLoading, data: getAllPerfumeData } = useQuery(
  //   ['perfume'],
  //   API.getPerfumeData
  // );

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Carousel pages={pages} onChange={(page) => setBannerPage(page)} />
      <BannerContent />
      {/* 향수 추천 FlatList */}
      <Recommend />
      {/* 브랜드 FlatList */}
      <RecommendBrand title="지금 사랑받고 있는 브랜드" text="전체보기" />
      {/* 어코드 FlatList */}
      <RecommendAccord title={`${month}월에 어울리는 핫한 어코드`} text="전체보기" />
      <ProductAddButton onPress={() => navigate('Perfume', { screen: 'addPerfumeBrand' })} />
    </Container>
  );
};

export default Home;

const Container = styled.ScrollView`` as unknown as typeof ScrollView;
