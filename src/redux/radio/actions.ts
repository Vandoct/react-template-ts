import {
  ERadioActionTypes,
  ICategoryRadio,
  IRadioBeginAction,
  IRadioDetailAction,
  IRadioErrorAction,
  IRadioFinishAction,
  IRadioSuccessAction,
  TRadioNullable,
} from './types';

export const radioBegin = (): IRadioBeginAction => {
  return {
    type: ERadioActionTypes.RADIO_BEGIN,
  };
};

export const radioSuccess = (radios: ICategoryRadio[]): IRadioSuccessAction => {
  return {
    type: ERadioActionTypes.RADIO_SUCCESS,
    data: radios,
  };
};

export const radioDetail = (radio: TRadioNullable): IRadioDetailAction => {
  return {
    type: ERadioActionTypes.RADIO_DETAIL,
    data: radio,
  };
};

export const radioError = (error: string): IRadioErrorAction => {
  return {
    type: ERadioActionTypes.RADIO_ERROR,
    error,
  };
};

export const radioFinish = (): IRadioFinishAction => {
  return {
    type: ERadioActionTypes.RADIO_FINISH,
  };
};
