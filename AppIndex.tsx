import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './src/constants/colors';
import HomeStack from './src/navigation/HomeStack';
import SearchStack from './src/navigation/SearchStack';
import MyPageStack from './src/navigation/ProfileStack';
import SplashScreen from 'react-native-splash-screen';
import EncryptedStorage from 'react-native-encrypted-storage';
import { getMyInfo } from './src/apis/auth/getMyInfo';
import { useSetRecoilState } from 'recoil';
import { getLoginUser } from './src/atoms/user/selector';

const Tab = createBottomTabNavigator();

const AppIndex = () => {
  const setLoginUser = useSetRecoilState(getLoginUser);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    (async () => {
      await EncryptedStorage.getItem('authCookie').then((response) => {
        if (response !== undefined) {
          getMyInfo().then((res) => {
            setLoginUser({
              nickname: res.data.nickname,
              email: res.data.email,
              gender: res.data.gender,
              age_group: res.data.age_group,
              profile_image: res.data.profile_image,
            });
          });
        } else {
          return;
        }
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      <PublicRouter />
    </NavigationContainer>
  );
};

const PublicRouter = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: isDark ? COLORS.BLACK_COLOR : COLORS.WHITE_COLOR,
      }}
      screenOptions={{
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {
          backgroundColor: isDark ? COLORS.BLACK_COLOR : COLORS.WHITE_COLOR,
        },
        tabBarActiveTintColor: isDark ? COLORS.YELLOW_COLOR : COLORS.BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? COLORS.LIGHT_GREY : COLORS.DARK_GREY,
        headerStyle: {
          backgroundColor: isDark ? COLORS.BLACK_COLOR : COLORS.WHITE_COLOR,
        },
        headerTitleStyle: {
          color: isDark ? COLORS.WHITE_COLOR : COLORS.BLACK_COLOR,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="SearchList"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyPageStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

// const PrivateRouter = () => {
//   const navigation = useNavigation();
//   return (
//     <Stack.Navigator initialRouteName="LoginPage">
//       <Stack.Group screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="LoginPage" component={LoginPage} />
//       </Stack.Group>
//       <Stack.Group
//         screenOptions={{
//           title: '회원가입',
//           headerLeft: () => {
//             return (
//               <Ionicons
//                 name="chevron-back-outline"
//                 size={28}
//                 onPress={() => {
//                   navigation.goBack();
//                 }}
//               />
//             );
//           },
//         }}
//       >
//         <Stack.Screen name="RegisterPage" component={RegisterPage} />
//         <Stack.Screen name="OnboardingEmail" component={OnboardingEmail} />
//         <Stack.Screen name="OnboardingPw" component={OnboardingPw} />
//         <Stack.Screen name="OnboardingRePw" component={OnboardingRePw} />
//         <Stack.Screen name="OnboardingGender" component={OnboardingGender} />
//         <Stack.Screen name="OnboardingAge" component={OnboardingAge} />
//         <Stack.Screen name="OnboardingNickname" component={OnboardingNickname} />
//         <Stack.Screen name="OnboardingAccord" component={OnboardingAccord} />
//         <Stack.Screen name="OnboardingEvent" component={OnboardingEvent} />
//         <Stack.Screen name="OnboardingResult" component={OnboardingResult} />
//         <Stack.Group>
//           <Stack.Screen name="Service" component={ServicePage} />
//           <Stack.Screen name="Information" component={InformationPage} />
//           <Stack.Screen name="Promotion" component={PromotionPage} />
//         </Stack.Group>
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// };

export default AppIndex;
