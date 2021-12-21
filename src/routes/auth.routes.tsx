import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SingIn } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SingIn" component={SingIn} />
    </Navigator>
  );
};

export default AuthRoutes;
