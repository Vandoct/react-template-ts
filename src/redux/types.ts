export interface IReduxBaseState {
  loading: boolean;
  error: string;
}

export interface IValueResponse {
  range: string;
  majorDimension: string;
  values: string[][];
}
