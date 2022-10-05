export interface Config {
  url: string;
  data?: FormData;
  method: MethodType;
}

export type MethodType = 'POST' | 'GET' | 'PUT' | 'DELETE';
