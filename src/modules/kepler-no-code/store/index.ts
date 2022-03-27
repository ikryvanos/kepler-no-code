import {createStore as createKeplerStore} from '../../kepler-gl/index'
import {reducer} from "./reducer";
import {KeplerReduxState} from "../../kepler-gl/types/state";
import { Store } from 'redux';
import {KeplerNoCodeState} from "./types/state";

export interface ReduxState extends KeplerReduxState {
  keplerNoCode: KeplerNoCodeState,
}

export const store: Store<ReduxState> = createKeplerStore({}, {
  keplerNoCode: reducer
}) as Store<ReduxState>; // TODO: fix typing
