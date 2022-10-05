import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Route from './navigation/Route';
import { ThemeProvider } from './theme';

function App() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff',
        },
      }}>
      <ThemeProvider>
        <Route />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
