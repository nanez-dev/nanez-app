import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import BrandPage from '../screens/BrandPage/BrandPage';

const BrandStack = createNativeStackNavigator();

const Brand = ({ navigation }: any) => {
  return (
    <BrandStack.Navigator
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
      <BrandStack.Screen name="BrandPage" component={BrandPage} />
    </BrandStack.Navigator>
  );
};

export default Brand;
