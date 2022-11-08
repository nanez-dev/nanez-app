import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BrandPage from '../screens/BrandPage/BrandPage';
import Home from '../screens/Home/Home';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerTitle: '브랜드관',
          headerLeft: () => {
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color="#666666"
                onPress={() => navigation.goBack()}
              />
            );
          },
        }}
      >
        <Stack.Screen name="Brand" component={BrandPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
