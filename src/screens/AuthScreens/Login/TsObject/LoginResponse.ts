export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  api_token: string;
  promo_code: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}

export interface LoginSuccess {
  status: boolean;
  api_token: string;
  message: string;
  user_info: UserInfo;
}

export interface LoginData {
  data: LoginSuccess;
  loading: boolean;
  error: string;
}
