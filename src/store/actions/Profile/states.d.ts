export interface State {
  id: number;
  name: string;
  created_at?: any;
  updated_at?: any;
}

export interface State {
  loading: boolean;
  data: State[];
}

export interface StateType {
  data: State;
  loading: boolean;
  error: string;
}
