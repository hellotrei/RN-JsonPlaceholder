import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen, ListScreen, DetailsScreen } from '../screens';

const Stack = createStackNavigator();

export const MainFlow = () => {
  return (
    <Stack.Navigator initialRouteName="Inro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
