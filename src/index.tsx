import initKepler from './modules/kepler-no-code';
import reportWebVitals from './reportWebVitals';
import { processCsvData, getFieldsFromData, processGeojson, processKeplerglJSON } from './modules/kepler-gl';
import {onDocumentReady} from "./libs/browser-event.utils";
import {Logger} from "./modules/infrastructure/logger";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

const logger = new Logger('App index');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.initKepler = initKepler;
onDocumentReady(function() {
  logger.debug('Initializing all kepler components...');
  const tags = document.querySelectorAll('[data-widget-type=\'kepler.gl\']');


  tags.forEach((tag) => {
    logger.debug(`Initializing ${tag.tagName}#${tag.id}...`);
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tag.onload();
    } catch (e) {
      const err = e as Error;
      logger.debug(`${tag.tagName}#${tag.id} initialization failed: ${err.message} ${err.stack}`);
    }
    logger.debug(`${tag.tagName}#${tag.id} initialized.`);
  });

  logger.debug('Initialization finished.');
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processModeAnalyticsDatasets = (datasets: Array<any>) => {
  return datasets.map((dataset) => {
    try {
      const { columns, content, queryName, query_token } = dataset;
      return {
        info: {
          label: queryName,
          id: query_token,
        },
        data: {
          fields: columns.map(({type, name}: any) => ({type, name})),
          rows: content.map((row: any) => columns.map(({name}: any) => row[name])),
        },
      }
    } catch (e) {
      const err = e as Error;
      logger.debug(`Remapping of ${JSON.stringify(dataset)} dataset failed: ${err.message} ${err.stack}`);
    }
  });
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processCsvData = processCsvData;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.getFieldsFromData = getFieldsFromData;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processGeojson = processGeojson;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processKeplerglJSON = processKeplerglJSON;
