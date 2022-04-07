import {createStore as createKeplerStore} from '../../kepler-gl/index'
import {reducer} from "./reducer";
import {KeplerReduxState} from "../../kepler-gl/types/state";
import {KeplerNoCodeState} from "./types/state";
import {Store} from "redux";

export interface ReduxState extends KeplerReduxState {
  keplerNoCode: KeplerNoCodeState,
}

export const createStore = (): Store<ReduxState> => {
  const store = createKeplerStore({}, {
    keplerNoCode: reducer
  }) as Store<ReduxState>; // TODO: fix typing

  return store;
};
