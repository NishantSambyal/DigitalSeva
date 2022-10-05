import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CustomDrawer from 'src/components/CustomDrawer';
import screens from 'src/screens';
import { useTheme } from 'src/theme';
import { RootStackProps } from './types';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackProps>();
  const Drawer = createDrawerNavigator();

  const isLoggedIn = true;
  const theme = useTheme();

  const renderDrawerScreens = () => {
    return (
      <>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: theme.colors.blue,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              fontSize: 15,
            },
          }}>
          <Drawer.Screen name="Dashboard" component={screens.Dashboard} />
        </Drawer.Navigator>
      </>
    );
  };
  const renderHomeStack = () => {
    return (
      <>
        <Stack.Screen name="Home" component={renderDrawerScreens} />
        <Stack.Screen
          name="UploadDocument"
          component={screens.UploadDocument}
        />
      </>
    );
  };
  const renderAuthStack = () => {
    return (
      <>
        <Stack.Screen name="Login" component={screens.Login} />
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? renderAuthStack() : renderHomeStack()}
    </Stack.Navigator>
  );
};

export default Route;
