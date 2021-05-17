import {
  ECommonActionTypes,
  ICommonBeginAction,
  ICommonErrorAction,
  ICommonFinishAction,
  ICommonSuccessAction,
  TUserNullable,
} from './types';

export const commonBegin = (): ICommonBeginAction => {
  return {
    type: ECommonActionTypes.COMMON_BEGIN,
  };
};

export const commonSuccess = (user: TUserNullable): ICommonSuccessAction => {
  return {
    type: ECommonActionTypes.COMMON_SUCCESS,
    data: user,
  };
};

export const commonError = (error: string): ICommonErrorAction => {
  return {
    type: ECommonActionTypes.COMMON_ERROR,
    error,
  };
};

export const commonFinish = (): ICommonFinishAction => {
  return {
    type: ECommonActionTypes.COMMON_FINISH,
  };
};
