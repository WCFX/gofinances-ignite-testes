import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Views from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Views.Home} />
      <Screen name="Register" component={Views.Register} />
    </Navigator>
  );
};

export default Routes;
