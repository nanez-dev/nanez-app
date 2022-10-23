import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import PerfumeRegBrand from '../screens/PerfumeReg/PerfumeRegBrand';
import PerfumeRegProduct from '../screens/PerfumeReg/PerfumeRegProduct';
import PerfumeRegSuccess from '../screens/PerfumeReg/PerfumeRegSuccess';

const RegisterStack = createNativeStackNavigator();

const ProductRegister = ({ navigation: { navigate } }: any) => {
  return (
    <RegisterStack.Navigator
      screenOptions={{
        headerTitle: '상품 정보',
        headerRight: () => {
          return (
            <Ionicons
              name="md-search-outline"
              size={24}
              color="#666666"
              onPress={() => navigate('Tabs', { screen: 'SearchList' })}
            />
          );
        },
      }}
    >
      <RegisterStack.Screen name="addPerfumeBrand" component={PerfumeRegBrand} />
      <RegisterStack.Screen name="addPerfumeProduct" component={PerfumeRegProduct} />
      <RegisterStack.Screen name="addPerfumeSuccess" component={PerfumeRegSuccess} />
    </RegisterStack.Navigator>
  );
};

export default ProductRegister;
