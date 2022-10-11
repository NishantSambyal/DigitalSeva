import React, { useEffect, useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from 'src/assets/images';
import { AlertDialog, Button, EditText } from 'src/components';
import { LoginActions } from 'src/store/actions/login.actions';
import { RootState } from 'src/store/reducers';
import { useStyles, useTheme } from 'src/theme';
import { LoginData } from '../Login/TsObject/LoginResponse';
import style from './styles';

const Register = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyles(style);
  const [name, setName] = useState('Nishant');
  const [email, setEmail] = useState('nishantsambyal123@gmail.com');
  const [phone, setPhone] = useState('1234567890');
  const [password, setPassword] = useState('Pass@123');
  const [confirmPass, setConfirmPass] = useState('Pass@123');
  const [alert, showAlert] = useState<boolean>(true);
  const loginReducer: LoginData = useSelector(
    (state: RootState) => state.loginReducer?.registerUser,
  );

  useEffect(() => {
    // dispatch(LoginActions.clearRegister());
  }, []);

  useEffect(() => {
    loginReducer?.data?.message && showAlert(true);
  }, [loginReducer]);

  const registerUser = () => {
    const payload = new FormData();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('phone', phone);
    payload.append('password', password);
    dispatch(LoginActions.registerUser(payload));
  };
  const alertHandler = () => {
    if (!loginReducer?.data?.status) {
      dispatch(LoginActions.updateLogin(loginReducer));
    } else {
      showAlert(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
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
          <View>
            <EditText
              titleText="Name"
              defaultValue={name}
              onChangeText={setName}
            />
            <EditText
              titleText="Email"
              viewStyle={styles.emailView}
              defaultValue={email}
              onChangeText={setEmail}
            />
            <EditText
              titleText="Phone"
              viewStyle={styles.emailView}
              defaultValue={phone}
              onChangeText={setPhone}
            />
            <EditText
              titleText="Password"
              defaultValue={password}
              viewStyle={styles.emailView}
              onChangeText={setPassword}
            />
            <EditText
              titleText="Confirm Password"
              defaultValue={confirmPass}
              onChangeText={setConfirmPass}
              viewStyle={styles.emailView}
            />
            <Button
              text="Register"
              isLoading={loginReducer?.loading}
              buttonStyle={styles.loginButton}
              onClick={registerUser}
            />
          </View>
        </View>
      </ScrollView>
      {loginReducer?.data?.message && (
        <AlertDialog
          visibility={alert}
          setVisibility={showAlert}
          success={!loginReducer?.data?.status}
          description={loginReducer.data?.message}
          alertHandler={alertHandler}
        />
      )}
    </View>
  );
};

export default Register;
