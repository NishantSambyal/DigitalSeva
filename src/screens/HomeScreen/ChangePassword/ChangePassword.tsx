import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { ChangePasswordType } from 'src/store/actions/Dashboard/changePassword';
import { changePassword } from 'src/assets/images';
import { AlertDialog, BaseScreen, Button, EditText } from 'src/components';
import Constant from 'src/constant';
import { validatePassword } from 'src/constant/regex';
import useMyNavigation from 'src/helpers/useNavigation';
import { LoginData } from 'src/screens/AuthScreens/Login/TsObject/LoginResponse';
import { DashboardActions } from 'src/store/actions/Dashboard/dashboard.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import style from './styles';

const ChangePassword = () => {
  const styles = useStyles(style);
  const dispatch = useDispatch();
  const navigation = useMyNavigation();
  const [alert, showAlert] = useState<boolean>(false);
  const [currPassword, setCurrPassword] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>();
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>();

  const loginData: LoginData = useSelector(
    (store: RootState) => store.loginReducer?.loginData,
  );

  const changePass: ChangePasswordType = useSelector(
    (store: RootState) => store.dashboardReducer?.changePassword,
  );

  useEffect(() => {
    if (changePass.data?.message) {
      showAlert(true);
    }
  }, [changePass.data?.message]);

  const changePasswordHandler = () => {
    const payload = new FormData();
    payload.append('current_password', currPassword);
    payload.append('password', password);
    payload.append('confirm_password', repeatPassword);
    dispatch(
      DashboardActions.changePassword(loginData.data?.user_info.id, payload),
    );
  };

  const onPasswordChange = passStr => {
    const passwordStr = passStr.trim();
    const validationError = !validatePassword(passwordStr)
      ? Constant.Constants.VALIDATION_PASSWORD
      : undefined;
    setPasswordError(validationError);
    setPassword(passwordStr);

    if (repeatPassword && repeatPassword.length > 0) {
      const repeatValidationError =
        passwordStr !== repeatPassword
          ? Constant.Constants.VALIDATION_RETYPE_PASSWORD
          : undefined;
      setRepeatPasswordError(repeatValidationError);
    }
  };

  const onRepeatPasswordChange = repeatPassStr => {
    const passwordStr = repeatPassStr.trim();
    const validationError =
      passwordStr !== password
        ? Constant.Constants.VALIDATION_RETYPE_PASSWORD
        : undefined;
    setRepeatPasswordError(validationError);
    setRepeatPassword(passwordStr);
  };

  const handleDialog = () => {
    changePass.data?.status ? navigation.goBack() : showAlert(false);
    dispatch(DashboardActions.clearPassword());
  };

  const checkEligibility = (): boolean => {
    const isDisable =
      !currPassword ||
      !password ||
      passwordError ||
      !repeatPassword ||
      repeatPasswordError
        ? true
        : false;
    return isDisable;
  };

  return (
    <BaseScreen title="Change Password">
      <View>
        <Image source={changePassword} style={styles.changePassImg} />
        <View style={styles.mainContainer}>
          <EditText
            titleText="Current Password"
            defaultValue={currPassword}
            viewStyle={styles.passwordView}
            onChangeText={setCurrPassword}
            secure
          />

          <EditText
            titleText="New Password"
            defaultValue={password}
            placeholder={'eg. Pass@123'}
            viewStyle={styles.passwordView}
            onChangeText={onPasswordChange}
            errorMessage={passwordError}
            secure
            handled={true}
          />

          <EditText
            titleText="Repeat Password"
            placeholder={'eg. Pass@123'}
            defaultValue={repeatPassword}
            viewStyle={styles.passwordView}
            errorMessage={repeatPasswordError}
            onChangeText={onRepeatPasswordChange}
            secure
            handled={true}
          />

          <Button
            text="Submit"
            isLoading={changePass.loading}
            disabled={checkEligibility()}
            buttonStyle={styles.loginButton}
            onClick={changePasswordHandler}
          />
        </View>
      </View>
      {alert && (
        <AlertDialog
          visibility={alert}
          setVisibility={showAlert}
          success={changePass.data?.status}
          description={changePass.data?.message}
          alertHandler={handleDialog}
        />
      )}
    </BaseScreen>
  );
};

export default ChangePassword;
