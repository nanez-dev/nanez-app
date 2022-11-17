import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageView from '../screens/ProfilePage/ProfilePage';
import GamePage from '../screens/GamePage/GamePage';
import Setting from '../screens/Setting/Setting';
import NoticePage from '../screens/NoticePage/NoticePage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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
        <Stack.Screen options={{ title: '공지사항' }} name="Notice" component={NoticePage} />
        <Stack.Screen options={{ title: '설정' }} name="Setting" component={Setting} />
        <Stack.Screen options={{ title: '게임' }} name="Game" component={GamePage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
