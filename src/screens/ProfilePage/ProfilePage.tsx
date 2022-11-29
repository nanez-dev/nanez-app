import React from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
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
} from './ProfilePage.styles';
import MenuTab from '../../components/MenuTab/MenuTab';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';

interface IMenuTabProps {
  id: number;
  source: ImageSourcePropType;
  title: string;
}

interface IServiceTabProps {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  screen: string;
  title: string;
}

const ProfilePage = () => {
  const userInfo = useRecoilValue(loginUserState);

  const ImageArr: IMenuTabProps[] = [
    {
      id: 1,
      title: '위시리스트',
      source: require('../../assets/images/mypage_img/icon_wish.png'),
    },
    {
      id: 2,
      title: '보유리스트',
      source: require('../../assets/images/mypage_img/icon_have.png'),
    },
  ];

  const serviceArr: IServiceTabProps[] = [
    {
      id: 1,
      icon: 'volume-high',
      screen: 'Notice',
      title: '공지사항',
    },
    {
      id: 2,
      icon: 'settings',
      screen: 'Setting',
      title: '설정',
    },
    {
      id: 3,
      icon: 'game-controller',
      screen: 'Game',
      title: '게임(테스트 버전)',
    },
  ];

  return userInfo ? (
    <Container>
      <SafeAreaView>
        <UserInfo>
          <ProfileImage
            source={{ uri: userInfo.profile_image || 'https://picsum.photos/200/300' }}
          />
          <UserName>{userInfo.nickname || '익명의 사용자'}님, 안녕하세요</UserName>
          <UserEmail>{userInfo.email || 'nanez.contact@gmail.com'}</UserEmail>
        </UserInfo>
        <ListCollection>
          {ImageArr.map((i) => (
            <MenuTab key={i.id} source={i.source} title={i.title} />
          ))}
        </ListCollection>
        <ServiceCollection>
          <ServiceTitle>고객센터</ServiceTitle>
          {serviceArr.map((i) => (
            <ServiceTab key={i.id} screen={i.screen} icon={i.icon} title={i.title} />
          ))}
        </ServiceCollection>
      </SafeAreaView>
    </Container>
  ) : (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
