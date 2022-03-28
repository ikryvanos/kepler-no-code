import initKepler from './modules/kepler-no-code';
import reportWebVitals from './reportWebVitals';
import { processCsvData, getFieldsFromData, processGeojson, processKeplerglJSON } from './modules/kepler-gl';
import {onDocumentReady} from "./libs/browser-event.utils";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.initKepler = initKepler;
onDocumentReady(function() {
  console.info('Init all kepler tags')
  const tags = document.querySelectorAll('[data-widget-type=\'kepler.gl\']');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  tags.forEach((tag) => tag.onload())
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processModeAnalyticsDatasets = (datasets: Array<any>) => {
  console.info('Remapbing', datasets);
  return datasets.map(({columns, content, queryName, query_token}) => {
    console.info('Remapbing dataset ', content, queryName, query_token);
    return  {
      info: {
        label: queryName,
        id: query_token,
      },
      data: {
        fields: columns.map(({type, name}: any) => ({type, name})),
        rows: content.map((row: any) => columns.map(({ name }: any) => row[name])),
      },
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
