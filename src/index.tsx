import initKepler from './modules/kepler-no-code';
import reportWebVitals from './reportWebVitals';
import { processCsvData, getFieldsFromData, processGeojson, processKeplerglJSON } from './modules/kepler-gl';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.initKepler = initKepler;
document.addEventListener("DOMContentLoaded", function() {
  const tags = document.querySelectorAll('[data-widget-type=\'kepler.gl\']');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  tags.forEach((tag) => tag.onload())
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.processModeAnalyticsDatasets = (datasets: Array<any>) => {
  return datasets.map(({content, queryName, query_token}) => ({
    info: {
      label: queryName,
      id: query_token,
    },
    data: getFieldsFromData(content),
  }));
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
