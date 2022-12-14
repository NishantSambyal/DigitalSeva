import { DashboardActionType } from '../actions/actionTypes';
import { handleData } from '../middlewares';

const initialState = {
  sliderData: {
    data: {},
    loading: false,
    error: null,
  },
  referAndEarn: {
    data: {},
    loading: false,
    error: null,
  },
  changePassword: {
    data: {},
    loading: false,
    error: null,
  },
  menu: {
    data: {},
    loading: false,
    error: null,
  },
};

const DashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DashboardActionType.SLIDER_API: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          sliderData: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          sliderData: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          sliderData: { loading: false, data: payload },
        }),
      });
    }

    case DashboardActionType.MENU_API: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          menu: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          menu: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          menu: { loading: false, data: payload },
        }),
      });
    }

    case DashboardActionType.REFER_AND_EARN: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          referAndEarn: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          referAndEarn: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          referAndEarn: { loading: false, data: payload },
        }),
      });
    }
    case DashboardActionType.CHANGE_PASSWORD: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          changePassword: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          changePassword: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          changePassword: { loading: false, data: payload },
        }),
      });
    }
    case DashboardActionType.CLEAR_CHANGE_PASSWORD: {
      return {
        ...state,
        changePassword: initialState.changePassword,
      };
    }
    default:
      return state;
  }
};

export default DashboardReducer;
