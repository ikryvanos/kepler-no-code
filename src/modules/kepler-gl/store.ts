import keplerGlReducer from 'kepler.gl/reducers';
import {applyMiddleware, combineReducers, createStore as createReduxStore} from "redux";
import {taskMiddleware} from 'react-palm/tasks';
import {Reducer} from 'react';
import {MapState, MapStyle, ProviderState, UiState, VisState} from './types/state';

export interface InitState {
  uiState?: UiState;
  mapState?: MapState;
  visState?: VisState;
  mapStyle?: MapStyle;
  providerState?: ProviderState;
}

export const createReducer = (initialState: InitState, reducers: Record<string, Reducer<any, any>> = {}) => {
  const keplerReducer = keplerGlReducer.initialState({
    uiState: initialState.uiState,
    mapState: initialState.mapState,
    visState: initialState.visState,
    mapStyle: initialState.mapStyle,
    providerState: initialState.providerState,
  });

  return combineReducers({
    keplerGl: keplerReducer,
    ...reducers,
  });
};

export const createStore = (initialState: InitState, reducers: Record<string, Reducer<any, any>> = {}) => {
  const reducer = createReducer(initialState, reducers);

  return createReduxStore(reducer, {}, applyMiddleware(taskMiddleware));
};
