import { Request } from './network';

export const BASE_URL = 'https://uat.digitalsewa.store/public/api/';
export const login = async data => {
  return Request.request({
    url: `${BASE_URL}login`,
    method: 'POST',
    data,
  });
};

export const register = async data => {
  return Request.request({
    url: `${BASE_URL}register`,
    method: 'POST',
    data,
  });
};
