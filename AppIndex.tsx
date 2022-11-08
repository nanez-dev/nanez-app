import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './src/constants/colors';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import HomeStack from './src/navigation/HomeStack';
import SearchStack from './src/navigation/SearchStack';
import MyPageStack from './src/navigation/MyPageStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppIndex = () => {
  const [loginUser, setLoginUser] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const isLogin = loginUser?.isLogin || false;

  return (
    <NavigationContainer>{isLogin ? <PublicRouter /> : <PrivateRouter />}</NavigationContainer>
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
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Na`nez',
          headerTitleStyle: {
            color: 'orange',
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="SearchList"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStack}
        options={{
          title: '마이페이지',
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
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen
        options={{
          title: '회원가입',
        }}
        name="RegisterPage"
        component={RegisterPage}
      />
    </Stack.Navigator>
  );
};

export default AppIndex;
