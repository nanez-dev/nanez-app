import React from 'react';
import { ImageSourcePropType, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  UserInfo,
  UserName,
  UserEmail,
  ListCollection,
  ServiceCollection,
  ServiceTitle,
  ProfileImage,
} from './MyPage.styles';
import MenuTab from '../../components/MenuTab/MenuTab';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
const tempImage = require('../../assets/images/temp_latte.jpeg');

interface IMenuTabProps {
  source: ImageSourcePropType;
  title: string;
}

interface IServiceTabProps {
  icon: keyof typeof Ionicons.glyphMap;
  screen: string;
  title: string;
}

const MypageView = ({ navigation: { navigate } }: any) => {
  const ImageArr: IMenuTabProps[] = [
    {
      title: '위시리스트',
      source: require('../../assets/images/mypage_img/holding_img.png'),
    },
    {
      title: '보유리스트',
      source: require('../../assets/images/mypage_img/recent_img.png'),
    },
    {
      title: '최근리스트',
      source: require('../../assets/images/mypage_img/wish_img.png'),
    },
  ];

  const serviceArr: IServiceTabProps[] = [
    {
      icon: 'volume-high',
      screen: 'Notice',
      title: '공지사항',
    },
    {
      icon: 'create',
      screen: 'Terms',
      title: '이용약관',
    },
    {
      icon: 'settings',
      screen: 'Setting',
      title: '설정',
    },
    {
      icon: 'game-controller',
      screen: 'Game',
      title: '게임(테스트 버전)',
    },
  ];

  return (
    <Container>
      <SafeAreaView>
        <UserInfo>
          <ProfileImage source={tempImage} />
          <UserName>라떼님, 안녕하세요</UserName>
          <UserEmail>latte@naver.com</UserEmail>
        </UserInfo>
        <ListCollection>
          {ImageArr.map((i, index) => (
            <MenuTab key={index} source={i.source} title={i.title} />
          ))}
        </ListCollection>
        <ServiceCollection>
          <ServiceTitle>고객센터</ServiceTitle>
          {serviceArr.map((i, index) => (
            <ServiceTab key={index} screen={i.screen} icon={i.icon} title={i.title} />
          ))}
        </ServiceCollection>
      </SafeAreaView>
    </Container>
  );
};

export default MypageView;
