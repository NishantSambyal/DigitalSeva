/* eslint-disable import/no-unresolved */
import { CityType } from './city';
import { MyProfileType } from './profile';
import { StateType } from './states';

export interface ProfileReducer {
  myProfile: MyProfileType;
  getStates: StateType;
  getCity: CityType;
}
