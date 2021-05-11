import {
  ERadioActionTypes,
  IReduxRadioState,
  TRadioReducerActions,
} from './types';

const initialState: IReduxRadioState = {
  loading: false,
  radio: undefined,
  radios: [],
  error: '',
};

const reducer = (
  state: IReduxRadioState = initialState,
  action: TRadioReducerActions
): IReduxRadioState => {
  switch (action.type) {
    case ERadioActionTypes.RADIO_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case ERadioActionTypes.RADIO_SUCCESS: {
      return {
        ...state,
        loading: false,
        radios: action.data,
      };
    }
    case ERadioActionTypes.RADIO_DETAIL: {
      return {
        ...state,
        loading: false,
        radio: action.data,
      };
    }
    case ERadioActionTypes.RADIO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
