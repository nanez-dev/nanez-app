import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/native';
import Root from './src/navigation/Root';
import { darkTheme, lightTheme } from './theme';
import Auth from './src/navigation/Auth';

const queryClient = new QueryClient();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // load할 라이브러리들 작성
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const isDark = useColorScheme() === 'dark';

  if (!appIsReady) {
    return null;
  }
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <NavigationContainer>{isLogin ? <Root /> : <Auth />}</NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
