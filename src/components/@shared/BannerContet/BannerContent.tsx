import React from 'react';
import { BannerContentSubTitle, BannerContentTitle, BannerContainer } from './BannerContent.styles';

const BannerContent = () => {
  return (
    <BannerContainer>
      <BannerContentTitle>어디서 좋은 향이 나네?</BannerContentTitle>
      <BannerContentSubTitle>오늘 나에게 맞는 향수를 찾아라!</BannerContentSubTitle>
    </BannerContainer>
  );
};

export default BannerContent;
