import {createKeplerGl} from "../../kepler-gl";
import {Icons} from "kepler.gl";
import {modalOpen, originalHtmlTagSetMeta} from "../store/actions";
import {ModalIds} from "../store/types/state";
import {DataSet} from "../../kepler-gl/types/data";
import {MapState, MapStyle, UiState, VisState} from "../../kepler-gl/types/state";
import {keplerGlComponentId} from '../constant';
import React from "react";
import { useStore } from "react-redux";
import {addDataToMap} from "kepler.gl/actions";
import {ModalDialog} from "./modal-dialogs";
import {ReduxState} from "../store";

export const KeplerNoCodeTool = (props: {
  mapboxApiAccessToken: string;
  width: number;
  height: number;
  dataSets: Array<DataSet>;
  dataDisplayOptions?: {
    readOnly?: boolean,
    centerMap?: boolean,
  },
  originalHtmlTagMeta: {
    tag: string;
    width: number,
    height: number,
    mapboxToken: string,
    onload: string
  },
  keplerState: {
    uiState?: UiState;
    visState?: VisState;
    mapState?: MapState;
    mapStyle?: MapStyle;
  },
}) => {
  const store = useStore<ReduxState>();
  const KeplerGl = createKeplerGl({
    sidePanel: {
      header: {
        share: {
          dropdown: {
            buttons: [
              {
                label: 'toolbar.exportImage',
                icon: Icons.Picture,
                key: 'image',
                onClick: (args) => args.onExportImage,
              },
              {
                label: 'toolbar.saveMap',
                icon: Icons.Save2,
                key: 'save',
                onClick: () => () => modalOpen(store, ModalIds.HTML_TAG_SAVE),
              },
            ],
          }
        }
      }
    }
  });

  Promise.resolve().then(() => {
    store.dispatch(addDataToMap({
      datasets: props.dataSets,
      // option
      option: {
        centerMap: true,
        readOnly: false,
        ...(props.dataDisplayOptions || {})
      },
      config: {
        visState: props.keplerState.visState,
        mapStyle: props.keplerState.mapStyle,
        mapState: props.keplerState.mapState,
      },
    }));

    originalHtmlTagSetMeta(store, props.originalHtmlTagMeta);
  });

  return (<div>
    <KeplerGl
      id={keplerGlComponentId}
      mapboxApiAccessToken={props.mapboxApiAccessToken}
      width={props.width}
      height={props.height}
    />
    <ModalDialog/>
  </div>);
}
