import { combineReducers } from 'redux';

import DashboardReducer from './dashboardReducer';
import LoginReducer from './loginReducer';
import ProfileReducer from './profileReducer';

const reducers = {
  loginReducer: LoginReducer,
  dashboardReducer: DashboardReducer,
  profileReducer: ProfileReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
