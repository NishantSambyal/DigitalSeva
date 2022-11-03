import { callSliderApi } from 'src/network/request';
import { DashboardActionType } from './actionTypes';

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
}
