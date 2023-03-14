import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainFlow } from './MainFlow';

const Drawer = createDrawerNavigator();

export const MainMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainFlow} />
    </Drawer.Navigator>
  );
};
