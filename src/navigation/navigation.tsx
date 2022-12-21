import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@app/components/BottomTabBar/BottomTabBar';
import DummyScreen from '@app/screens/DummyScreen';
import { Screen } from './types';

const AppStack = createBottomTabNavigator();

const AppNavigator = () => (
  <AppStack.Navigator
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}>
    <AppStack.Screen name={Screen.Home} component={DummyScreen} />
    <AppStack.Screen name={Screen.Notifications} component={DummyScreen} />
    <AppStack.Screen name={Screen.Profile} component={DummyScreen} />
  </AppStack.Navigator>
);

export default AppNavigator;
