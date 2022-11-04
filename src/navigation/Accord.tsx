import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AccordPage from '../screens/AccordPage/AccordPage';

const AccordStack = createNativeStackNavigator();

const Accord = ({ navigation: { goBack } }: any) => {
  return (
    <AccordStack.Navigator>
      <AccordStack.Screen
        options={{
          headerTitle: '어코드관',
          headerLeft: () => (
            <Ionicons name="arrow-back" size={24} color="#666666" onPress={() => goBack()} />
          ),
        }}
        name="AccordPage"
        component={AccordPage}
      />
    </AccordStack.Navigator>
  );
};

export default Accord;
