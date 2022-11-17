import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BrandPage from '../screens/BrandPage/BrandPage';
import Home from '../screens/Home/Home';
import { Ionicons } from '@expo/vector-icons';
import AccordPage from '../screens/AccordPage/AccordPage';
import PerfumeRegBrand from '../screens/PerfumeReg/PerfumeRegBrand';
import PerfumeRegProduct from '../screens/PerfumeReg/PerfumeRegProduct';
import PerfumeRegSuccess from '../screens/PerfumeReg/PerfumeRegSuccess';
import PerfumeDetail from '../screens/PerfumeDetail/PerfumeDetail';
import LogoTitle from '../components/LogoTitle/LogoTitle';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
              <Ionicons
                //@ts-ignore
                onPress={() => navigation.navigate('AddBrand')}
                name="create-outline"
                size={24}
              />
            ),
          }}
          name="HomePage"
          component={Home}
        />
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
      <Stack.Group
        screenOptions={{
          headerTitle: '상품 정보',
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
        <Stack.Screen name="PerfumeDetail" component={PerfumeDetail} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerTitle: '어코드관',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#666666"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      >
        <Stack.Screen name="Accord" component={AccordPage} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerTitle: '제품 등록 요청',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#666666"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      >
        <Stack.Screen name="AddBrand" component={PerfumeRegBrand} />
        <Stack.Screen name="AddProduct" component={PerfumeRegProduct} />
        <Stack.Screen name="AddSuccess" component={PerfumeRegSuccess} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
