import { useNavigation } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Auth from './src/navigation/Auth';
import Root from './src/navigation/Root';
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { loginCheck } from './src/atoms/loginCheck';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const navigation = useNavigation();
  const checkLogin = useRecoilValue(loginCheck);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    function prepare() {
      try {
        if (checkLogin) {
          //@ts-ignore
          navigation.navigate('Tabs', { screen: 'Home' });
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [checkLogin, navigation]);

  const isDark = useColorScheme() === 'dark';

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {checkLogin ? <Root /> : <Auth />}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
