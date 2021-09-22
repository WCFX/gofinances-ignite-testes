import React from 'react';

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

import Routes from './routes';

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
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
