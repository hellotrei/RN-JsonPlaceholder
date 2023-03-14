import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainMenu } from './MainMenu';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainMenu />
    </NavigationContainer>
  );
};
