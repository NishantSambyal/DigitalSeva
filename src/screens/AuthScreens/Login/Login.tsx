import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from 'src/assets/images';
import { Button, EditText, TextView } from 'src/components';
import { ActivitiesStack } from 'src/navigation/types';
import { LoginActions } from 'src/store/actions/login.actions';
import { RootState } from 'src/store/reducers';
import { useStyles, useTheme } from 'src/theme';
import style from './styles';

const Login = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(style);
  const loginReducer = useSelector(
    (state: RootState) => state.loginReducer?.loginData,
  );
  const navigation = useNavigation<ActivitiesStack>();
  const [email, setEmail] = useState('nishantsambyal123@gmail.com');
  const [password, setPassword] = useState('Pass@123');

  const loginUser = () => {
    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);
    dispatch(LoginActions.loginUser(payload));
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="default"
        backgroundColor={theme.colors.colorPrimaryDark}
      />
      <ScrollView contentContainerStyle={styles.styleView}>
        <View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              resizeMethod="scale"
              resizeMode="contain"
              source={logo}
            />
          </View>
          <View style={styles.formView}>
            <EditText
              titleText="Email"
              viewStyle={styles.emailView}
              defaultValue={email}
              onChangeText={setEmail}
            />
            <EditText
              titleText="Password"
              defaultValue={password}
              viewStyle={styles.passwordView}
              onChangeText={setPassword}
              secure
            />
            <Button
              text="Login"
              isLoading={loginReducer.loading}
              buttonStyle={styles.loginButton}
              onClick={loginUser}
            />

            <TextView style={styles.bottomText}>
              Don't have any account?
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <TextView style={styles.createOne}> Create one</TextView>
              </TouchableOpacity>
            </TextView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
