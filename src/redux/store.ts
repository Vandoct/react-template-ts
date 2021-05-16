import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import commonReducer from './common/reducer';
import { IReduxCommonState } from './common/types';
import radioReducer from './radio/reducer';
import { IReduxRadioState } from './radio/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ApplicationState {
  common: IReduxCommonState;
  radio: IReduxRadioState;
}

export type AppThunk<R = void> = ThunkAction<
  R,
  ApplicationState,
  null,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<ApplicationState, null, AnyAction>;

const rootReducer = combineReducers({
  common: commonReducer,
  radio: radioReducer,
});

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
