import React from 'react';
import styled from 'styled-components/native';

import BannerContent from '../../components/@shared/BannerContet/BannerContent';
import Recommend from '../../components/Recommend/Recommend';
import RecommendBrand from '../../components/Brand/Brand';
import ProductAddButton from '../../components/@shared/Button/ProductAddButton/ProductAddButton';

import RecommendAccord from '../../components/Accord/Accord';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

import HomeInput from '../../components/@shared/HomeInput/HomeInput';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import Slide from '../../components/Slide/Slide';

const banner_1 = require('../../assets/images/banner_img/rolling_banner_1.jpg');
const banner_2 = require('../../assets/images/banner_img/rolling_banner_2.jpg');
const banner_3 = require('../../assets/images/banner_img/rolling_banner_3.jpg');
const banner_4 = require('../../assets/images/banner_img/rolling_banner_4.jpg');

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'HomePage'>;
const Home = ({ navigation: { navigate } }: HomeScreenProps) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  const homeBanner = [
    { img: banner_1, key: 1 },
    { img: banner_2, key: 2 },
    { img: banner_3, key: 3 },
    { img: banner_4, key: 4 },
  ];
  const month = new Date().getMonth() + 1;

  return (
    <Container showsVerticalScrollIndicator={false}>
      <HomeInput />
      <Swiper
        horizontal
        loop
        autoplay
        activeDotColor="#424242"
        activeDotStyle={{ width: 16 }}
        autoplayTimeout={3.5}
        showsPagination={true}
        containerStyle={{
          width: '100%',
          height: SCREEN_HEIGHT / 4,
        }}
      >
        {homeBanner.map((i) => (
          <Slide bannerPath={i.img} key={i.key} />
        ))}
      </Swiper>
      <BannerContent />
      {/* 향수 추천 FlatList */}
      <Recommend />
      {/* 브랜드 FlatList */}
      <RecommendBrand title="지금 사랑받고 있는 브랜드" text="전체보기" />
      {/* 어코드 FlatList */}
      <RecommendAccord title={`${month}월에 어울리는 핫한 어코드`} text="전체보기" />
      <ProductAddButton onPress={() => navigate('AddBrand')} />
    </Container>
  );
};

export default Home;

const Container = styled.ScrollView`
  background-color: white;
  margin-top: 80px;
`;
