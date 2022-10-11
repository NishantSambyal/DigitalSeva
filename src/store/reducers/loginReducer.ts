import { handleData } from '../middlewares';
import { LoginActionType } from './../actions/actionTypes';

const initialState = {
  loginData: {
    data: {},
    loading: false,
    error: null,
  },
  registerUser: {
    data: {},
    loading: false,
    error: null,
  },
};

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LoginActionType.LOGIN_USER: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          loginData: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          loginData: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          loginData: { loading: false, data: payload },
        }),
      });
    }

    case LoginActionType.UPDATE_LOGIN: {
      return {
        ...state,
        loginData: { data: payload },
      };
    }

    case LoginActionType.REGISTER_USER: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          registerUser: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          registerUser: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          registerUser: { loading: false, data: payload },
        }),
      });
    }
    case LoginActionType.CLEAR_REGISTER: {
      return {
        ...state,
        registerUser: initialState.registerUser,
      };
    }

    case LoginActionType.CLEAR_REDUCER: {
      return initialState;
    }
    default:
      return state;
  }
};

export default LoginReducer;
