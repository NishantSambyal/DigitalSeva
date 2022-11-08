export interface ShareEarnData {
  promo_code: string;
  referrer_value: number;
  referred_value: number;
}

export interface Data {
  code: number;
  status?: any;
  c_status: boolean;
  message: string;
  share_earn_data: ShareEarnData;
}

export interface ReferAndEarnType {
  loading: boolean;
  data: Data;
}
