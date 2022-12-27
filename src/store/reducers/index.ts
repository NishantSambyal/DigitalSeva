import { combineReducers } from 'redux';

import DashboardReducer from './dashboardReducer';
import LoginReducer from './loginReducer';
import ProfileReducer from './profileReducer';
import UploadDocumentReducer from './uploadDocumentsReducer';

const reducers = {
  loginReducer: LoginReducer,
  dashboardReducer: DashboardReducer,
  profileReducer: ProfileReducer,
  UploadDocumentReducer: UploadDocumentReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
