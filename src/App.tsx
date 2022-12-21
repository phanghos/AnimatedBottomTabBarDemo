import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/navigation';

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
