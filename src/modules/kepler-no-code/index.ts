import mountKeplerGl from "./mount-kepler-gl";
import {DataSet} from "../kepler-gl/types/data";
import {MapState, MapStyle, VisState} from "../kepler-gl/types/state";
import {Logger} from "../infrastructure/logger";

const logger = new Logger('kepler-no-code#index.ts');

const parseJSON = <T>(str: string): [Error | null, T | null] => {
  let obj: Record<string, any> | null = null;
  let err: Error | null = null;
  try {
    obj = JSON.parse(str);
  } catch (e) {
    err = e as Error;
  }

  return [err, obj as T];
}

export default function initKepler(element: HTMLElement, dataSets: Array<DataSet>) {
  logger.debug(`Initializing kepler for ${element.tagName}#${element.id}`)
  const mapboxApiAccessToken = element.dataset.mapboxToken;
  if (!mapboxApiAccessToken) {
    throw new Error(`Element ${element.id} has not "data-mapbox-token" attribute`);
  }

  const rawWidth = element.dataset.width || '1600';
  const width = Number.parseInt(rawWidth);
  if (!width && width < 0) {
    throw new Error(`Element ${element.id} attribute "data-width" has incorrect value, it should be positive integer`);
  }

  const rawHeight = element.dataset.height || '800';
  const height = Number.parseInt(rawHeight);
  if (!height && height < 0) {
    throw new Error(`Element ${element.id} attribute "data-height" has incorrect value, it should be positive integer`);
  }

  let visState: VisState | null = null;
  if (element.dataset.visState) {
    const [error, val] = parseJSON<VisState>(element.dataset.visState);
    if (error) {
      throw new Error(`Element ${element.id} has invalid "data-vis-state" attribute`);
    }

    visState = val;
  }

  let mapState: MapState | null = null;
  if (element.dataset.mapState) {
    const [error, val] = parseJSON<MapState>(element.dataset.mapState);
    if (error) {
      throw new Error(`Element ${element.id} has invalid "data-map-state" attribute`);
    }

    mapState = val;
  }

  let mapStyle: MapStyle | null = null;
  if (element.dataset.mapStyle) {
    const [error, val] = parseJSON<MapStyle>(element.dataset.mapStyle);
    if (error) {
      throw new Error(`Element ${element.id} has invalid "data-map-style" attribute`);
    }

    mapStyle = val;
  }

  const onloadStr = element.onload!.toString();
  const originalOnLoad = onloadStr.substring(onloadStr.indexOf("{") + 1, onloadStr.lastIndexOf("}")).replace(/\n/g, '');

  logger.debug(`Mounting kepler component to ${element.tagName}#${element.id}...`);
  mountKeplerGl(element, {
    mapboxApiAccessToken,
    width: width,
    height: height,
    visState: visState!,
    mapState: mapState!,
    mapStyle: mapStyle!,
    dataSets: dataSets,
    originalHtmlTagMeta: {
      tag: element.tagName,
      mapboxToken: mapboxApiAccessToken,
      width: width,
      height: height,
      onload: originalOnLoad,
    }
  });
  logger.debug(`Kepler component mounted to ${element.tagName}#${element.id}.`);
}
