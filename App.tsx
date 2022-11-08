import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';
import { RecoilRoot } from 'recoil';
import AppIndex from './AppIndex';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const Nanez = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AppIndex />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
};

const App = () => {
  return <Nanez />;
};

export default App;
