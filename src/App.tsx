import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { StatusBar } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

// import BottomRoutes from './routes/bottom.routes';
import { AuthProvider } from './hooks/auth';
import { SingIn } from './screens';

const App = () => {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <SingIn />
        </AuthProvider>

        {/* <BottomRoutes /> */}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
