import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './navigation/Route';
import { persistor, store } from './store';
import { ThemeProvider } from './theme';

function App() {
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
