export interface City {
  id: number;
  name: string;
  state_id: number;
  created_at?: any;
  updated_at?: any;
}

export interface CityType {
  data: City;
  loading: boolean;
  error: string;
}
