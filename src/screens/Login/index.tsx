/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { logo } from 'src/assets/images';
import { Button, EditText } from 'src/components';
import { login } from 'src/network/request';
import { useTheme } from 'src/theme';

const Login = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('manzarhussain055@gmail.com');
  const [password, setPassword] = useState('Manzar@123');

  const loginUser = () => {
    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);
    login(payload).then(res => {
      navigation.navigate('');
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.colorPrimaryDark}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          marginHorizontal: 16,
        }}>
        <View>
          <View
            style={{
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              style={{ width: '100%' }}
              resizeMethod="scale"
              resizeMode="contain"
              source={logo}
            />
          </View>
          <View style={{ height: 400 }}>
            <EditText
              titleText="Email"
              viewStyle={{ marginTop: 40 }}
              defaultValue={email}
            />
            <EditText
              titleText="Password"
              defaultValue={password}
              viewStyle={{ marginTop: 20 }}
            />
            <Button
              text="Login"
              buttonStyle={{ marginTop: 60 }}
              onClick={loginUser}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
