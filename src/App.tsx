import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './navigation/Route';
import { persistor, store } from './store';
import { ThemeProvider } from './theme';

function App() {
  useEffect(() => {
    setTimeout(() => {
      Platform.OS === 'android' && SplashScreen.hide();
    }, 5000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
