import { Dispatch } from 'redux';
import { ApplicationState, AppThunk } from 'redux/store';
import { radios } from 'utils/dummy';
import { slugify } from 'utils/helper';
import { radioBegin, radioDetail, radioError, radioSuccess } from './actions';
import { ICategoryRadio, IRadio } from './types';

export const getRadioList = (): AppThunk<Promise<string>> => (
  dispatch: Dispatch
): Promise<string> => {
  return new Promise<string>(() => {
    dispatch(radioBegin());

    setTimeout(() => {
      try {
        const data: ICategoryRadio[] = radios.map((item) => {
          const radioList: IRadio[] = item.channels.map((radio) => {
            return {
              id: radio.id.toString(),
              image: radio.image,
              title: radio.title,
              url: radio.url,
            };
          });

          return {
            category: item.category,
            radios: radioList,
          };
        });
        dispatch(radioSuccess(data));
      } catch (e) {
        dispatch(radioError(e));
      }
    }, 1500);
  });
};

export const getRadioDetail = (id: string): AppThunk<Promise<string>> => (
  dispatch: Dispatch,
  getState: () => ApplicationState
): Promise<string> => {
  return new Promise<string>(() => {
    dispatch(radioBegin());

    setTimeout(() => {
      try {
        const radio =
          getState()
            .radio.radios.map((item) =>
              item.radios.find((i) => id === slugify(i.title))
            )
            .filter((item) => item != null)[0] || null;

        dispatch(radioDetail(radio));
      } catch (e) {
        dispatch(radioError(e));
      }
    }, 300);
  });
};
