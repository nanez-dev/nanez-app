import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyPage from './MyPage';

const Stack = createNativeStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
