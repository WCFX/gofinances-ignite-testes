import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import { useAuth } from './hooks/auth';
import { AuthProvider } from './hooks/auth';
import Routes from './routes';

const App = () => {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fonstLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>

      {/* <BottomRoutes /> */}
    </ThemeProvider>
  );
};

export default App;
