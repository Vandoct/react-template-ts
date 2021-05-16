import { findRadioById } from 'redux/radio/fetcher';
import { IRadio } from 'redux/radio/types';
import { AppDispatch, ApplicationState, AppThunk } from 'redux/store';
import { IValueResponse } from 'redux/types';
import api, { refreshToken } from 'utils/api';
import { sha256 } from 'utils/crypto';
import { isEmptyArray } from 'utils/helper';
import LocalStorageService from 'utils/localStorageService';
import { commonBegin, commonError, commonSuccess } from './actions';
import { IUser } from './types';

interface ILogin {
  email: string;
  pass: string;
}

const localStorageService = LocalStorageService.getInstance();

export const login = (
  email: string,
  pass: string
): AppThunk<Promise<string>> => async (
  dispatch: AppDispatch,
  getState: () => ApplicationState
): Promise<string> => {
  dispatch(commonBegin());

  try {
    let sheetRange = 'Users!B3:C';
    let path = `/${process.env.REACT_APP_SHEET_ID}/values/${sheetRange}`;

    const params = {
      key: process.env.REACT_APP_API_KEY,
    };

    const response: IValueResponse = await (await api.get(path, { params }))
      .data;
    const parsedResponse: ILogin[] = response.values.map((user: string[]) => ({
      email: user[0],
      pass: user[1],
    }));

    // Check if email is exist
    const user = parsedResponse.filter((u: ILogin) => u.email === email);
    if (isEmptyArray(user)) {
      dispatch(commonError('User not found'));
      return 'User not found';
    }

    // Check if password is correct
    const passwordHashed = await sha256(pass);
    if (user[0].pass !== passwordHashed) {
      dispatch(commonError('User not found'));
      return 'User not found';
    }

    // Find user row data
    const userIndex = parsedResponse.findIndex((u) => u.email === email);
    const sheetRow = userIndex + 3;

    sheetRange = `Users!A${sheetRow}:G${sheetRow}`;
    path = `/${process.env.REACT_APP_SHEET_ID}/values:batchGet`;

    const param = new URLSearchParams();
    param.append('ranges', `Users!A${sheetRow}:B${sheetRow}`);
    param.append('ranges', `Users!D${sheetRow}:E${sheetRow}`);
    param.append('key', params.key || '');

    // Get user detail
    const userResponse: IValueResponse[] = await (
      await api.get(path, { params: param })
    ).data.valueRanges;

    const categoryRadios = getState().radio.radios;

    // Get user favorite radio
    const favoriteRadioID = userResponse[1].values[0][1].split(',');
    const favoriteRadios = favoriteRadioID
      .map((id) => findRadioById(id, categoryRadios))
      .filter((i): i is IRadio => i != null);

    const data: IUser = {
      id: userResponse[0].values[0][0],
      email: userResponse[0].values[0][1],
      name: userResponse[1].values[0][0],
      favorites: favoriteRadios,
    };

    localStorageService.setUser(data);

    // Get access token
    refreshToken();

    dispatch(commonSuccess(data));
    return 'Success';
  } catch (error) {
    dispatch(commonError(error));
    return error;
  }
};

export const checkAuthState = (): AppThunk => (dispatch: AppDispatch) => {
  const user = localStorageService.getUser();
  if (user) {
    dispatch(commonSuccess(user));
  }
};

export const clearError = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(commonError(''));
};
