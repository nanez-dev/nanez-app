import React from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuTab from '../../components/MenuTab/MenuTab';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';
import FastImage, { Source } from 'react-native-fast-image';
import { styles } from './ProfilePage.styles';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { getPerfumeMylist, patchPerfumeMylist } from '../../apis/perfume';

interface IMenuTabProps {
  id: number;
  source: number | Source | undefined;
  screen: string;
  title: string;
}

interface IServiceTabProps {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  screen: string;
  title: string;
}

type ProfileScreenProps = NativeStackScreenProps<ParamListBase, 'ProfilePage'>;
const ProfilePage = ({ navigation: { navigate } }: ProfileScreenProps) => {
  const userInfo = useRecoilValue(loginUserState);

  const ImageArr: IMenuTabProps[] = [
    {
      id: 1,
      title: '위시리스트',
      screen: 'Wish',
      source: require('../../assets/images/mypage_img/icon_wish.png'),
    },
    {
      id: 2,
      title: '보유리스트',
      screen: 'Having',
      source: require('../../assets/images/mypage_img/icon_have.png'),
    },
    // {
    //   id: 3,
    //   title: '최근 목록',
    //   screen: 'History',
    //   source: require('../../assets/images/mypage_img/icon_have.png'),
    // },
  ];

  const serviceArr: IServiceTabProps[] = [
    // {
    //   id: 1,
    //   icon: 'volume-high',
    //   screen: 'Notice',
    //   title: '공지사항',
    // },
    {
      id: 2,
      icon: 'settings',
      screen: 'Setting',
      title: '설정',
    },
    {
      id: 3,
      icon: 'alert-circle-outline',
      screen: 'Report',
      title: '신고',
    },
    // {
    //   id: 4,
    //   icon: 'clipboard-outline',
    //   screen: 'Opinion',
    //   title: '의견보내기',
    // },
    // {
    //   id: 3,
    //   icon: 'game-controller',
    //   screen: 'Game',
    //   title: '게임(테스트 버전)',
    // },
  ];

  const defaultProfileImage = require('../../assets/images/mypage_img/default_profile_image.png');

  const goToJoin = () => {
    navigate('LoginPage');
  };

  return userInfo ? (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.userInfo}>
          {userInfo.profile_image ? (
            <FastImage
              style={styles.profileImage}
              source={{ uri: userInfo.profile_image || defaultProfileImage }}
            />
          ) : (
            <FastImage style={styles.profileImage} source={defaultProfileImage} />
          )}
          <Text style={styles.userName}>{userInfo.nickname || '익명의 사용자'}님, 안녕하세요</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
        </View>
        {!userInfo.email && (
          <TouchableOpacity style={styles.joinWrap} onPress={goToJoin}>
            <Text style={styles.joinTitle}>로그인 및 회원가입</Text>
          </TouchableOpacity>
        )}
        <View style={styles.listCollection}>
          {ImageArr.map((i) => (
            <MenuTab key={i.id} source={i.source} title={i.title} screen={i.screen} />
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
