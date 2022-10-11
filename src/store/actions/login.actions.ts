import { login, register } from 'src/network/request';
import { LoginActionType } from './actionTypes';

export class LoginActions {
  static loginUser = (payload): any => {
    return {
      isAsyncCall: true,
      baseType: LoginActionType.LOGIN_USER,
      payload,
      asyncCall: () => {
        return login(payload);
      },
    };
  };

  static registerUser = (payload): any => {
    return {
      isAsyncCall: true,
      baseType: LoginActionType.REGISTER_USER,
      payload,
      asyncCall: () => {
        return register(payload);
      },
    };
  };

  static updateLogin =
    (payload): any =>
    dispatch => {
      dispatch({ type: LoginActionType.UPDATE_LOGIN, payload });
    };

  static clearReducer = (): any => dispatch => {
    dispatch({ type: LoginActionType.CLEAR_REDUCER });
  };
  static clearRegister = (): any => dispatch => {
    dispatch({ type: LoginActionType.CLEAR_REGISTER });
  };
}
