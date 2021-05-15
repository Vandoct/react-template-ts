import { IRadio } from 'redux/radio/types';
import { IReduxBaseState } from 'redux/types';

export enum ECommonActionTypes {
  COMMON_BEGIN = 'COMMON_BEGIN',
  COMMON_SUCCESS = 'COMMON_SUCCESS',
  COMMON_DETAIL = 'COMMON_DETAIL',
  COMMON_ERROR = 'COMMON_ERROR',
  COMMON_FINISH = 'COMMON_FINISH',
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  favorites: IRadio[];
}

export interface ICommonBeginAction {
  type: ECommonActionTypes.COMMON_BEGIN;
}

export interface ICommonSuccessAction {
  type: ECommonActionTypes.COMMON_SUCCESS;
  data: IUser;
}

export interface ICommonErrorAction {
  type: ECommonActionTypes.COMMON_ERROR;
  error: string;
}

export interface ICommonFinishAction {
  type: ECommonActionTypes.COMMON_FINISH;
}

export interface IReduxCommonState extends IReduxBaseState {
  user: IUser | null;
}

export type TCommonReducerActions =
  | ICommonBeginAction
  | ICommonSuccessAction
  | ICommonErrorAction
  | ICommonFinishAction;
