import { AppDispatch, ApplicationState, AppThunk } from 'redux/store';
import api from 'utils/api';
import { getTimestamp, parseResponse } from 'utils/helper';
import {
  radioBegin,
  radioDetail,
  radioError,
  radioFinish,
  radioSuccess,
} from './actions';

export const getRadioList = (): AppThunk<Promise<string>> => async (
  dispatch: AppDispatch
): Promise<string> => {
  dispatch(radioBegin());

  try {
    const sheetRange = 'Radio';
    const path = `/${process.env.REACT_APP_SHEET_ID}/values/${sheetRange}`;

    const params = {
      key: process.env.REACT_APP_API_KEY,
    };

    const response = await api.get(path, { params });
    const parsedResponse = parseResponse(response.data.values);

    dispatch(radioSuccess(parsedResponse));
    return 'Success';
  } catch (error) {
    dispatch(radioError(error));
    return error;
  }
};

export const getRadioDetail = (id: string): AppThunk<Promise<string>> => async (
  dispatch: AppDispatch,
  getState: () => ApplicationState
): Promise<string> => {
  dispatch(radioBegin());

  try {
    let radio = findRadioById(id, getState());

    if (radio) {
      dispatch(radioDetail(radio));
      return 'Success';
    }

    await dispatch(getRadioList());
    radio = findRadioById(id, getState());
    dispatch(radioDetail(radio));
    return 'Success';
  } catch (error) {
    dispatch(radioError(error));
    return error;
  }
};

const findRadioById = (id: string, state: ApplicationState) => {
  return (
    state.radio.radios
      .map((item) => item.radios.find((i) => id === i.id))
      .filter((item) => item != null)[0] || null
  );
};

export const reportRadio = (id: string): AppThunk<Promise<string>> => async (
  dispatch: AppDispatch
): Promise<string> => {
  dispatch(radioBegin());

  try {
    const sheetRange = 'Report!A1:append';
    const path = `/${process.env.REACT_APP_SHEET_ID}/values/${sheetRange}`;

    const body = {
      majorDimension: 'ROWS',
      values: [['=UUID()', 'user_id', id, getTimestamp()]],
    };

    const params = {
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
    };

    const response = await api.post(path, body, { params });
    const isSuccess = response.data.updates.updatedRows > 0;

    if (!isSuccess) {
      dispatch(radioError('Failed'));
      return response.statusText;
    }

    dispatch(radioFinish());
    return 'Success';
  } catch (error) {
    dispatch(radioError(error));
    return error;
  }
};
