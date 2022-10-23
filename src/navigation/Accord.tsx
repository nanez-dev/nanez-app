import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AccordPage from '../screens/AccordPage/AccordPage';

const AccordStack = createNativeStackNavigator();

const Accord = ({ navigation }: any) => {
  return (
    <AccordStack.Navigator
      screenOptions={{
        headerTitle: '어코드관',
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
      <AccordStack.Screen name="AccordPage" component={AccordPage} />
    </AccordStack.Navigator>
  );
};

export default Accord;
