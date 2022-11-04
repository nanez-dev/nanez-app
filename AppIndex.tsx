import React from 'react';
import { RecoilRoot } from 'recoil';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';

const AppIndex = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default AppIndex;
