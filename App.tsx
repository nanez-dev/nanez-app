import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';
import { RecoilRoot } from 'recoil';
import AppIndex from './AppIndex';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://90ba4ed4a98e4938bf0bc303153de393@o4504253700046848.ingest.sentry.io/4504253707714560',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2,
    },
  },
});

const Nanez = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <RecoilRoot>
        <Suspense fallback={null}>
          <QueryClientProvider client={queryClient}>
            <AppIndex />
          </QueryClientProvider>
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
};

const App = () => {
  return <Nanez />;
};

export default Sentry.wrap(App);
