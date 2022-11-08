import { callSliderApi, referAndEarn } from 'src/network/request';
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
}
