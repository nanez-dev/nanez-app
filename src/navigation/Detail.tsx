import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfumeDetail from '../screens/PerfumeDetail/PerfumeDetail';
import { Ionicons } from '@expo/vector-icons';

const DetailStack = createNativeStackNavigator();

const Detail = ({ navigation: { navigate } }: any) => {
  return (
    <DetailStack.Navigator
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
      <DetailStack.Screen name="PerfumeDetail" component={PerfumeDetail} />
    </DetailStack.Navigator>
  );
};

export default Detail;
