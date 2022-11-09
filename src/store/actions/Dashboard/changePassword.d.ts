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
  gender: string;
  dob: string;
  api_token: string;
  deleted_at?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Data {
  status: boolean;
  token: string;
  user_info: UserInfo;
  message: string;
}

export interface ChangePasswordType {
  loading: boolean;
  data: Data;
}
