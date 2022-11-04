import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';

const Nav = createNativeStackNavigator();

const Auth = () => {
  return (
    <Nav.Navigator initialRouteName="RegisterPage">
      <Nav.Screen name="LoginPage" component={LoginPage} />
      <Nav.Screen name="RegisterPage" component={RegisterPage} />
    </Nav.Navigator>
  );
};

export default Auth;
