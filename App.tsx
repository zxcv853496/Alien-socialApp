import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

// Define Custom Theme (VibeSocial)
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: NavigationDefaultTheme });

const theme = {
  ...DefaultTheme,
  ...LightTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LightTheme.colors,
    primary: '#6750A4', // Deep Purple - Vibe
    secondary: '#625b71',
    tertiary: '#7D5260',
    background: '#FDFBFF',
    surface: '#FDFBFF',
    primaryContainer: '#EADDFF',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme as any}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
