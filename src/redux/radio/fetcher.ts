import { AppDispatch, ApplicationState, AppThunk } from 'redux/store';
import api from 'utils/api';
import { parseResponse } from 'utils/helper';
import { radioBegin, radioDetail, radioError, radioSuccess } from './actions';

export const getRadioList = (): AppThunk<Promise<string>> => (
  dispatch: AppDispatch
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    dispatch(radioBegin());

    const sheetRange = 'Radio';
    api
      .get(`/${process.env.REACT_APP_SHEET_ID}/values/${sheetRange}`, {
        params: {
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const parsedResponse = parseResponse(response.data.values);
        dispatch(radioSuccess(parsedResponse));
        resolve('Success');
      })
      .catch((error) => {
        console.log(error);

        dispatch(radioError(error));
        reject(error);
      });
  });
};

export const getRadioDetail = (id: string): AppThunk<Promise<string>> => (
  dispatch: AppDispatch,
  getState: () => ApplicationState
): Promise<string> => {
  return new Promise<string>(() => {
    dispatch(radioBegin());

    let radio = findRadioById(id, getState());

    if (radio) {
      dispatch(radioDetail(radio));
      return;
    }

    dispatch(getRadioList())
      .then(() => {
        radio = findRadioById(id, getState());

        dispatch(radioDetail(radio));
      })
      .catch((error) => dispatch(radioError(error)));
  });
};

const findRadioById = (id: string, state: ApplicationState) => {
  return (
    state.radio.radios
      .map((item) => item.radios.find((i) => id === i.id))
      .filter((item) => item != null)[0] || null
  );
};
