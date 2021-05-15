import {
  ECommonActionTypes,
  IReduxCommonState,
  TCommonReducerActions,
} from './types';

const initialState: IReduxCommonState = {
  loading: false,
  user: null,
  error: '',
};

const reducer = (
  state: IReduxCommonState = initialState,
  action: TCommonReducerActions
): IReduxCommonState => {
  switch (action.type) {
    case ECommonActionTypes.COMMON_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case ECommonActionTypes.COMMON_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    }
    case ECommonActionTypes.COMMON_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case ECommonActionTypes.COMMON_FINISH: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
