export interface UiState {
  /**
   * hide side panel to disallow user customize the map
   */
  readOnly: boolean;
  /**
   * customize which map control button to show
   */
  mapControls: {
    visibleLayers: {
      show: boolean;
    },
    mapLegend: {
      show: boolean;
      active: boolean;
    },
    toggle3d: {
      show: boolean;
    },
    splitMap: {
      show: boolean;
    };
  };
}

export type VisState = Record<string, any>;
export type MapState = Record<string, any>;
export type MapStyle = Record<string, any>;
export type ProviderState = Record<string, any>;

export interface KeplerReduxState {
  mapState: MapState;
  mapStyle: MapStyle;
  providerState: ProviderState;
  uiState: UiState;
  visState: VisState;
}

export interface KeplerReduxNameSpace {
  [key: string]: KeplerReduxState
}

export interface KeplerReduxState {
  keplerGl: KeplerReduxNameSpace
}
