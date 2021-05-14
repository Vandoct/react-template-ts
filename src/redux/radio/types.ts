import { IReduxBaseState } from 'redux/types';

export enum ERadioActionTypes {
  RADIO_BEGIN = 'RADIO_BEGIN',
  RADIO_SUCCESS = 'RADIO_SUCCESS',
  RADIO_DETAIL = 'RADIO_DETAIL',
  RADIO_ERROR = 'RADIO_ERROR',
  RADIO_FINISH = 'RADIO_FINISH',
}

export interface IRadio {
  id: string;
  image: string;
  title: string;
  url: string;
}

export interface ICategoryRadio {
  category: string;
  radios: IRadio[];
}

export interface IRadioBeginAction {
  type: ERadioActionTypes.RADIO_BEGIN;
}

export interface IRadioSuccessAction {
  type: ERadioActionTypes.RADIO_SUCCESS;
  data: ICategoryRadio[];
}

export interface IRadioDetailAction {
  type: ERadioActionTypes.RADIO_DETAIL;
  data: TRadioNullable;
}

export interface IRadioErrorAction {
  type: ERadioActionTypes.RADIO_ERROR;
  error: string;
}

export interface IRadioFinishAction {
  type: ERadioActionTypes.RADIO_FINISH;
}

export interface IReduxRadioState extends IReduxBaseState {
  radio: TRadioNullable;
  radios: ICategoryRadio[];
}

export type TRadioNullable = IRadio | null | undefined;

export type TRadioReducerActions =
  | IRadioBeginAction
  | IRadioSuccessAction
  | IRadioDetailAction
  | IRadioErrorAction
  | IRadioFinishAction;
