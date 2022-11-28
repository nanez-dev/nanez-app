import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './src/constants/colors';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import HomeStack from './src/navigation/HomeStack';
import SearchStack from './src/navigation/SearchStack';
import MyPageStack from './src/navigation/ProfileStack';
import OnboardingEmail from './src/screens/RegisterPage/OnboardingEmail';
import OnboardingPw from './src/screens/RegisterPage/OnboardingPw';
import OnboardingRePw from './src/screens/RegisterPage/OnboardingRePw';
import OnboardingGender from './src/screens/RegisterPage/OnboardingGender';
import OnboardingAge from './src/screens/RegisterPage/OnboardingAge';
import OnboardingNickname from './src/screens/RegisterPage/OnboardingNickname';
import OnboardingAccord from './src/screens/RegisterPage/OnboardingAccord';
import OnboardingResult from './src/screens/RegisterPage/OnboardingResult';
import OnboardingEvent from './src/screens/RegisterPage/OnboardingEvent';
import { useRecoilValue } from 'recoil';
import { getLoginUser } from './src/atoms/user/selector';
import ServicePage from './src/screens/ServicePage/ServicePage';
import InformationPage from './src/screens/ServicePage/InformationPage';
import PromotionPage from './src/screens/ServicePage/PromotionPage';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppIndex = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const loginUser = useRecoilValue(getLoginUser);
  const isLoggedin = loginUser?.isLoggedin || false;

  return (
    <NavigationContainer>{isLoggedin ? <PublicRouter /> : <PrivateRouter />}</NavigationContainer>
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
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: '600',
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

const PrivateRouter = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          title: '회원가입',
          headerLeft: () => {
            return (
              <Ionicons
                name="chevron-back-outline"
                size={28}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            );
          },
        }}
      >
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="OnboardingEmail" component={OnboardingEmail} />
        <Stack.Screen name="OnboardingPw" component={OnboardingPw} />
        <Stack.Screen name="OnboardingRePw" component={OnboardingRePw} />
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

export default AppIndex;
