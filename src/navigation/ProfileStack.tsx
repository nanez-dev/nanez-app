import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageView from '../screens/ProfilePage/ProfilePage';
import Setting from '../screens/Setting/Setting';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Report from '../screens/ReportPage/ReportPage';
import Withdrawal from '../screens/WithdrawalPage/Withdrawal';
// import OpinionPage from '../screens/OpinionPage/OpinionPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';
import OnboardingEmail from '../screens/RegisterPage/OnboardingEmail';
import OnboardingPw from '../screens/RegisterPage/OnboardingPw';
import OnboardingRePw from '../screens/RegisterPage/OnboardingRePw';
import OnboardingGender from '../screens/RegisterPage/OnboardingGender';
import OnboardingAge from '../screens/RegisterPage/OnboardingAge';
import OnboardingNickname from '../screens/RegisterPage/OnboardingNickname';
import OnboardingAccord from '../screens/RegisterPage/OnboardingAccord';
import OnboardingEvent from '../screens/RegisterPage/OnboardingEvent';
import OnboardingResult from '../screens/RegisterPage/OnboardingResult';
import ServicePage from '../screens/ServicePage/ServicePage';
import InformationPage from '../screens/ServicePage/InformationPage';
import PromotionPage from '../screens/ServicePage/PromotionPage';
import Wish from '../screens/WishPage/Wish';
import Having from '../screens/HavingPage/Having';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen options={{ title: '마이페이지' }} name="ProfilePage" component={MypageView} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerLeft: () => (
            <Ionicons
              name={'arrow-back'}
              size={24}
              //@ts-ignore
              onPress={() => navigation.navigate('ProfilePage')}
            />
          ),
        }}
      >
        {/* <Stack.Screen options={{ title: '공지사항' }} name="Notice" component={NoticePage} /> */}
        <Stack.Screen options={{ title: '설정' }} name="Setting" component={Setting} />
        {/* <Stack.Screen options={{ title: '게임' }} name="Game" component={GamePage} /> */}
        <Stack.Group>
          <Stack.Screen options={{ title: '신고' }} name="Report" component={Report} />
          {/* <Stack.Screen options={{ title: '의견보내기' }} name="Opinion" component={OpinionPage} /> */}
          <Stack.Screen options={{ title: '회원탈퇴' }} name="Withdrawal" component={Withdrawal} />
        </Stack.Group>
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen options={{ title: '위시리스트' }} name="Wish" component={Wish} />
        <Stack.Screen options={{ title: '보유리스트' }} name="Having" component={Having} />
        <Stack.Screen options={{ title: '최근리스트' }} name="History" component={Wish} />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          title: '회원가입',
          headerLeft: () => (
            <Ionicons
              name={'chevron-back-outline'}
              size={24}
              //@ts-ignore
              onPress={() => navigation.navigate('ProfilePage')}
            />
          ),
        }}
      >
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="OnboardingEmail" component={OnboardingEmail} />
        <Stack.Screen name="OnboardingPw" component={OnboardingPw} />
        <Stack.Screen name="OnboardingGender" component={OnboardingGender} />
        <Stack.Screen name="OnboardingAge" component={OnboardingAge} />
        <Stack.Screen name="OnboardingNickname" component={OnboardingNickname} />
        <Stack.Screen name="OnboardingAccord" component={OnboardingAccord} />
        <Stack.Screen name="OnboardingEvent" component={OnboardingEvent} />
        <Stack.Screen name="OnboardingResult" component={OnboardingResult} />
        <Stack.Group>
          <Stack.Screen name="Service" component={ServicePage} />
          <Stack.Screen name="Information" component={InformationPage} />
          <Stack.Screen name="Promotion" component={PromotionPage} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
