import { DashboardActionType } from '../actions/actionTypes';
import { handleData } from '../middlewares';

const initialState = {
  sliderData: {
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
    default:
      return state;
  }
};

export default DashboardReducer;
