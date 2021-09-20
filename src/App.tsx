import React from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import theme from "./global/styles/theme";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";



const App = () => {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fonstLoaded) {
    return <AppLoading/>
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
