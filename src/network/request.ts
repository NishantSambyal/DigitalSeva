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

export const callSliderApi = async () => {
  return Request.request({
    url: `${BASE_URL}slider`,
    method: 'GET',
  });
};

export const referAndEarn = async data => {
  return Request.request({
    url: `${BASE_URL}share-earn`,
    method: 'POST',
    data,
  });
};

export const getMyProfile = async user_id => {
  return Request.request({
    url: `${BASE_URL}show-profile/${user_id}`,
    method: 'GET',
  });
};

export const getStates = async () => {
  return Request.request({
    url: `${BASE_URL}get-state`,
    method: 'GET',
  });
};

export const getCity = async state_id => {
  return Request.request({
    url: `${BASE_URL}get-city/${state_id}`,
    method: 'GET',
  });
};

// export const updateProfile = async payload => {
//   return Request.request({
//     url: `${BASE_URL}update-profile/?name=${payload.name}&gender=${payload.gender}&date_of_birth=${payload.dob}&address_name=${payload.address_name}&`,
//     method: 'GET',
//   });
// };

export const updateProfile = async (user_id, data) => {
  return Request.request({
    url: `${BASE_URL}update-profile/${user_id}`,
    method: 'POST',
    data,
  });
};
