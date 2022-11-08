import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SearchList from '../screens/SearchList/SearchList';

const Stack = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeachList" component={SearchList} />
    </Stack.Navigator>
  );
};

export default SearchStack;
