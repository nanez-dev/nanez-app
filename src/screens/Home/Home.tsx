import React, { useState } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { useQuery } from '@tanstack/react-query';

import BannerContent from '../../components/@shared/BannerContet/BannerContent';
import Carousel from '../../components/Carousel/Carousel';
import Recommend from '../../components/Recommend/Recommend';
import RecommendBrand from '../../components/Brand/Brand';
import ProductAddButton from '../../components/ProductAddButton/ProductAddButton';

import API from '../../apis/apis';
import RecommendAccord from '../../components/Accord/Accord';

const imagePath = require('../../assets/images/banner.png');

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = ({ navigation: { navigate } }: any) => {
  const month = new Date().getMonth() + 1;
  const [bannerPage, setBannerPage] = useState(0);

  const pages = Array.from({ length: 5 }, (_, i) => ({
    value: 'carousel_' + String(i),
    img: imagePath,
  }));

  const { isLoading: allPerfumeLoading, data: getAllPerfumeData } = useQuery(
    ['perfume'],
    API.getPerfumeData
  );

  const loading = allPerfumeLoading;
  return loading ? (
    <View>
      <ActivityIndicator size="large" />
    </View>
  ) : (
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
