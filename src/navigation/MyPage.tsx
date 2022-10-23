import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import Setting from '../screens/Setting/Setting';
import GamePage from '../screens/GamePage/GamePage';

const Notice = () => {
  return (
    <TouchableOpacity>
      <Text>Notice</Text>
    </TouchableOpacity>
  );
};

const Terms = () => {
  return (
    <TouchableOpacity>
      <Text>이용 약관</Text>
    </TouchableOpacity>
  );
};

const NativeStack = createNativeStackNavigator();

const MyPage = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: true,
      }}
    >
      <NativeStack.Screen name="Notice" component={Notice} />
      <NativeStack.Screen name="Terms" component={Terms} />
      <NativeStack.Screen name="Setting" component={Setting} />
      <NativeStack.Screen name="Game" component={GamePage} />
    </NativeStack.Navigator>
  );
};

export default MyPage;
