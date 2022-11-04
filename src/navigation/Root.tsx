import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Detail from './Detail';
import MyPage from './MyPage';
import Register from './Register';
import Accord from './Accord';
import Brand from './Brand';
import Auth from './Auth';

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Auth" component={Auth} />
      <Nav.Screen name="Detail" component={Detail} />
      <Nav.Screen name="MyPageList" component={MyPage} />
      <Nav.Screen name="Perfume" component={Register} />
      <Nav.Screen name="Accord" component={Accord} />
      <Nav.Screen name="Brand" component={Brand} />
    </Nav.Navigator>
  );
};

export default Root;
