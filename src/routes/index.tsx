import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Views from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      initialRouteName="CategorySelect"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Views.Home} />
      <Screen name="Register" component={Views.Register} />
      <Screen name="CategorySelect" component={Views.CategorySelect} />
    </Navigator>
  );
};

export default Routes;
