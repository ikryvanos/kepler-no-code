import React from 'react';

import {Provider, useSelector} from "react-redux";
import {addDataToMap } from "kepler.gl/actions";
import KeplerGlSchema from 'kepler.gl/schemas';
import {Icons} from "kepler.gl";
import {createStore, createKeplerGl} from '../kepler-gl';
import {Modal, StyledModalContent} from 'kepler.gl/components';
import {MapState, MapStyle, UiState, VisState} from "../kepler-gl/types/state";
import {DataSet} from "../kepler-gl/types/data";
import {store} from "./store";
import {KeplerNoCodeTool} from "./components/kepler-no-code-tool";
import ReactDOM from "react-dom";


const mountKeplerGl = (element: HTMLElement, params: {
  dataDisplayOptions?: {
    readOnly?: boolean,
    centerMap?: boolean,
  },
  uiState?: UiState,
  mapState?: MapState;
  mapStyle?: MapStyle;
  visState?: VisState;
  mapboxApiAccessToken: string;
  originalHtmlTagMeta: {
    tag: string;
    width: number,
    height: number,
    mapboxToken: string,
    onload: string
  },
  width: number;
  height: number;
  dataSets: Array<DataSet>;
}) => {
  const app = (
    <Provider store={store}>
      <KeplerNoCodeTool
        mapboxApiAccessToken={params.mapboxApiAccessToken}
        width={params.width}
        height={params.height}
        dataSets={params.dataSets}
        dataDisplayOptions={params.dataDisplayOptions}
        originalHtmlTagMeta={params.originalHtmlTagMeta}
        keplerState={{
          uiState: params.uiState,
          visState: params.visState,
          mapState: params.mapState,
          mapStyle: params.mapStyle,
        }}
      />
    </Provider>
  );

  ReactDOM.render(app, element);
};

export default mountKeplerGl;
