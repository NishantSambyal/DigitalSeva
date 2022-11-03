export interface UserInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
  image?: any;
  otp?: any;
  is_otp_verified: string;
  email_verified_at: Date;
  promo_code: string;
  promo_code_applied?: any;
  promo_code_value: number;
  wallet_point: number;
  gender?: any;
  dob?: any;
  api_token: string;
  deleted_at?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Address {
  id: number;
  user_id: number;
  name?: any;
  address?: any;
  state_id: number;
  city_id: number;
  pincode?: any;
  created_at: Date;
  updated_at: Date;
  status: number;
}

export interface ProfileSuccess {
  status: boolean;
  user_info: UserInfo;
  address: Address;
  message: string;
}

export interface MyProfileType {
  data: ProfileSuccess;
  loading: boolean;
  error: string;
}
