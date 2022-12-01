import React from 'react';
import { SafeAreaView, View, ActivityIndicator, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuTab from '../../components/MenuTab/MenuTab';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';
import FastImage, { Source } from 'react-native-fast-image';
import { styles } from './ProfilePage.styles';

interface IMenuTabProps {
  id: number;
  source: number | Source | undefined;
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
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.userInfo}>
          <FastImage
            style={styles.profileImage}
            source={{ uri: userInfo.profile_image || 'https://picsum.photos/200/300' }}
          />
          <Text style={styles.userName}>{userInfo.nickname || '익명의 사용자'}님, 안녕하세요</Text>
          <Text style={styles.userEmail}>{userInfo.email || 'nanez.contact@gmail.com'}</Text>
        </View>
        <View style={styles.listCollection}>
          {ImageArr.map((i) => (
            <MenuTab key={i.id} source={i.source} title={i.title} />
          ))}
        </View>
        <View style={styles.serviceCollection}>
          <Text style={styles.serviceTitle}>고객센터</Text>
          {serviceArr.map((i) => (
            <ServiceTab key={i.id} screen={i.screen} icon={i.icon} title={i.title} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  ) : (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ProfilePage;
