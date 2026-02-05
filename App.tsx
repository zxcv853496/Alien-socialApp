import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

// Define Custom Theme (VibeSocial)
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  materialLight: DefaultTheme // Explicitly pass MD3 theme to adapter
});

const customColors = {
  primary: '#6750A4', // Deep Purple - Vibe
  secondary: '#625b71',
  tertiary: '#7D5260',
  background: '#FDFBFF',
  surface: '#FDFBFF',
  primaryContainer: '#EADDFF',
};

// Merge for Paper (needs MD3 structure)
const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...customColors
  },
};

// Merge for Navigation (needs Navigation structure)
const navigationTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    // Map Paper colors to Navigation colors if needed, but LightTheme already does it via adapter
    background: customColors.background,
    primary: customColors.primary,
  }
}

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navigationTheme as any}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
