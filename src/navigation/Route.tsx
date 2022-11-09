import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import CustomDrawer from 'src/components/CustomDrawer';
import { AuthScreens, HomeScreens } from 'src/screens';
import { LoginData } from 'src/screens/AuthScreens/Login/TsObject/LoginResponse';
import { RootState } from 'src/store/reducers';
import { useTheme } from 'src/theme';
import { RootStackProps } from './types';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackProps>();
  const Drawer = createDrawerNavigator();
  const loginData: LoginData = useSelector(
    (state: RootState) => state.loginReducer?.loginData?.data,
  );
  // const isLoggedIn = loginData?.data?.api_token || loginData?.token;
  const isLoggedIn = loginData?.token;
  // const isLoggedIn = true;

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
          <Drawer.Screen name="Dashboard" component={HomeScreens.Dashboard} />
        </Drawer.Navigator>
      </>
    );
  };
  const renderHomeStack = () => {
    return (
      <>
        <Stack.Screen name="Home" component={renderDrawerScreens} />
        <Stack.Screen name="MyProfile" component={HomeScreens.MyProfile} />
        <Stack.Screen
          name="UploadDocument"
          component={HomeScreens.UploadDocument}
        />
        <Stack.Screen
          name="ReferAndEarn"
          component={HomeScreens.ReferAndEarn}
        />
        <Stack.Screen
          name="ChangePassword"
          component={HomeScreens.ChangePassword}
        />
      </>
    );
  };
  const renderAuthStack = () => {
    return (
      <>
        <Stack.Screen name="Login" component={AuthScreens.Login} />
        <Stack.Screen name="Register" component={AuthScreens.Register} />
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
