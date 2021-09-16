import React from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import theme from "./global/styles/theme";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
    <NavigationContainer>
  
      <Routes />
    
    </NavigationContainer>
      
      </ThemeProvider>
  );
};

export default App;
