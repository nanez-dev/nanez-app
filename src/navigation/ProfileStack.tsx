import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageView from '../screens/ProfilePage/ProfilePage';
import Setting from '../screens/Setting/Setting';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Report from '../screens/ReportPage/ReportPage';
import Withdrawal from '../screens/WithdrawalPage/Withdrawal';
import OpinionPage from '../screens/OpinionPage/OpinionPage';

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
          <Stack.Screen options={{ title: '의견보내기' }} name="Opinion" component={OpinionPage} />
          <Stack.Screen options={{ title: '회원탈퇴' }} name="Withdrawal" component={Withdrawal} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
