import { ProfileActionType } from '../actions/actionTypes';
import { handleData } from '../middlewares';

const initialState = {
  myProfile: {
    data: {},
    loading: false,
    error: null,
  },
  getStates: {
    data: {},
    loading: false,
    error: null,
  },
  getCity: {
    data: {},
    loading: false,
    error: null,
  },
  updateProfile: {
    data: {},
    loading: false,
    error: null,
  },
};

const ProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ProfileActionType.MY_PROFILE: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          myProfile: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          myProfile: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          myProfile: { loading: false, data: payload },
        }),
      });
    }

    case ProfileActionType.GET_STATES: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          getStates: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          getStates: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          getStates: { loading: false, data: payload },
        }),
      });
    }

    case ProfileActionType.GET_CITY: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          getCity: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          getCity: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          getCity: { loading: false, data: payload },
        }),
      });
    }

    case ProfileActionType.UPDATE_PROFILE: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          updateProfile: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          updateProfile: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          updateProfile: { loading: false, data: payload },
        }),
      });
    }

    default:
      return state;
  }
};

export default ProfileReducer;
