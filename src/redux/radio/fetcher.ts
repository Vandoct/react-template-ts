import { AppDispatch, ApplicationState, AppThunk } from 'redux/store';
import api from 'utils/api';
import { getTimestamp, parseResponse } from 'utils/helper';
import LocalStorageService from 'utils/localStorageService';
import {
  radioBegin,
  radioDetail,
  radioError,
  radioFinish,
  radioSuccess,
} from './actions';
import { ICategoryRadio, IRadio } from './types';

const localStorageService = LocalStorageService.getInstance();

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
    const categoryRadios = getState().radio.radios;
    let radio = findRadioById(id, categoryRadios);

    if (radio) {
      dispatch(radioDetail(radio));
      return 'Success';
    }

    await dispatch(getRadioList());
    radio = findRadioById(id, categoryRadios);
    dispatch(radioDetail(radio));
    return 'Success';
  } catch (error) {
    dispatch(radioError(error));
    return error;
  }
};

export const findRadioById = (
  id: string,
  radios: ICategoryRadio[]
): IRadio | null => {
  return (
    radios
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

    const userId = localStorageService.getUser()?.id;

    const body = {
      majorDimension: 'ROWS',
      values: [['=UUID()', userId, id, getTimestamp()]],
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
    throw Error(error);
  }
};
