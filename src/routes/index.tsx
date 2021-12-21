import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';
import BottomRoutes from './bottom.routes';

const Routes = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <BottomRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
