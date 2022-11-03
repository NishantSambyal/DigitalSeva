import {
  getCity,
  getMyProfile,
  getStates,
  updateProfile,
} from 'src/network/request';
import { ProfileActionType } from '../actionTypes';

export class ProfileActions {
  static getMyProfile = (id): any => {
    return {
      isAsyncCall: true,
      baseType: ProfileActionType.MY_PROFILE,
      asyncCall: () => {
        return getMyProfile(id);
      },
    };
  };
  static getStates = (): any => {
    return {
      isAsyncCall: true,
      baseType: ProfileActionType.GET_STATES,
      asyncCall: () => {
        return getStates();
      },
    };
  };

  static getCity = (state_id): any => {
    return {
      isAsyncCall: true,
      baseType: ProfileActionType.GET_CITY,
      asyncCall: () => {
        return getCity(state_id);
      },
    };
  };

  static updateProfile = (user_id, payload): any => {
    return {
      isAsyncCall: true,
      baseType: ProfileActionType.UPDATE_PROFILE,
      asyncCall: () => {
        return updateProfile(user_id, payload);
      },
    };
  };
}
