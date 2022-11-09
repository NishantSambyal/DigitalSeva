import {
  callSliderApi,
  changePassword,
  referAndEarn,
} from 'src/network/request';
import { DashboardActionType } from '../actionTypes';

export class DashboardActions {
  static callSliderApi = (): any => {
    return {
      isAsyncCall: true,
      baseType: DashboardActionType.SLIDER_API,
      asyncCall: () => {
        return callSliderApi();
      },
    };
  };

  static referAndEarn = (data): any => {
    return {
      isAsyncCall: true,
      baseType: DashboardActionType.REFER_AND_EARN,
      asyncCall: () => {
        return referAndEarn(data);
      },
    };
  };

  static changePassword = (user_id, data): any => {
    return {
      isAsyncCall: true,
      baseType: DashboardActionType.CHANGE_PASSWORD,
      asyncCall: () => {
        return changePassword(user_id, data);
      },
    };
  };
  static clearPassword = (): any => dispatch => {
    dispatch({ type: DashboardActionType.CLEAR_CHANGE_PASSWORD });
  };
}
