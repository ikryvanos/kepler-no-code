import React from 'react';
import '../App.css';

import KeplerGl from 'kepler.gl';
import {Provider} from "react-redux";
import keplerGlReducer from "kepler.gl/reducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
// TODO: check how react-palm is used
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {taskMiddleware} from 'react-palm/tasks';
import {addDataToMap} from "kepler.gl/actions";
import KeplerGlSchema from 'kepler.gl/schemas';


export interface DataSet {
  info: {
    label: string,
    id: string,
  },
  data: {
    fields: Array<{ name: string, format?: string, type?: 'real' | 'string' | 'integer' | 'timestamp'}>
    rows: Array<Array<any>>,
  },
}


const keplerGlFactory = (params: {
  id: string;
  mapboxApiAccessToken: string;
  width: number;
  height: number;
  fetchDataSets: () => Promise<Array<DataSet>>;
  // TODO: add typing
  onConfigUpdates?: (config: Record<string, any>) => void;
  dataDisplayOptions?: {
    readOnly?: boolean,
    centerMap?: boolean,
  }
  uiState?: {
    /**
     * hide side panel to disallow user customize the map
     */
    readOnly?: boolean;
    /**
     * customize which map control button to show
     */
    mapControls?: {
      visibleLayers?: {
        show: boolean;
      },
      mapLegend?: {
        show: boolean;
        active: boolean;
      },
      toggle3d?: {
        show: boolean;
      },
      splitMap?: {
        show: boolean;
      };
    };
  }
  visState?: Record<string, any>,
  mapState?: Record<string, any>,
  mapStyle?: Record<string, any>,
}) => {
  const keplerReducer = keplerGlReducer.initialState({
    uiState: params.uiState,
  });
  const reducer = combineReducers({
    keplerGl: keplerReducer,
  });

  const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));
  params.fetchDataSets().then((dataSets) => {
    store.dispatch(addDataToMap({
      datasets: dataSets,
      // option
      option: {
        centerMap: true,
        readOnly: false,
        ...(params.dataDisplayOptions || {})
      },
      config: {
        visState: params.visState,
        mapStyle: params.mapStyle,
        mapState: params.mapState,
      },
    }));
  });

  if (params.onConfigUpdates) {
    let lastVisState: Record<string, any> | null = null;
    let lastMapState: Record<string, any> | null = null;
    let lastMapStyle: Record<string, any> | null = null;
    store.subscribe(() => {
      if (!params.onConfigUpdates) {
        return;
      }

      const state = store.getState();
      // TODO: do something
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const keplerAppState = state.keplerGl && state.keplerGl[params.id] || null;

      const visState = keplerAppState?.visState || null;
      const mapState = keplerAppState?.mapState || null;
      const mapStyle = keplerAppState?.mapStyle || null;
      if (lastVisState !== visState || lastMapState !== mapState || lastMapStyle !== mapStyle) {
        lastVisState = visState;
        lastMapState = mapState;
        lastMapStyle = mapStyle;

        params.onConfigUpdates(KeplerGlSchema.getConfigToSave(keplerAppState))
      }
    })
  }

  return (
    <Provider store={store}>
      <KeplerGl
        id={params.id}
        mapboxApiAccessToken={params.mapboxApiAccessToken}
        width={params.width}
        height={params.height}/>
    </Provider>
  );
};

export default keplerGlFactory;
