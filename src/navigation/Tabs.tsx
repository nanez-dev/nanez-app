import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import MyPage from '../screens/MyPage/MyPage';
import COLORS from '../constants/colors';
import SearchList from '../screens/SearchList/SearchList';

// import { useRecoilValue } from 'recoil';
// import { tokenCheck } from '../atoms/tokenCheck';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  // const isLogin = useRecoilValue(tokenCheck);

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
        component={Home}
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
        component={SearchList}
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
        component={MyPage}
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

export default Tabs;
