import React from 'react';
import './index.css';
import initKepler from './modules/kepler-no-code';
import reportWebVitals from './reportWebVitals';

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


// mountKeplerGl(document.getElementById('root')!, {
//   width: 1600,
//   height: 500,
//   mapboxApiAccessToken: 'pk.eyJ1IjoiaWhhcmtyeXZhbm9zIiwiYSI6ImNrMWtmYjRqeDE2YnIzZGp5bmkzdmNicXUifQ.Y3f3Cmz3xebuejGbi9SIeA',
//   "visState": { "filters": [], "layers": [ { "id": "ly1no7a", "type": "point", "config": { "dataId": "some-id", "label": "some", "color": [ 77, 193, 156 ], "highlightColor": [ 252, 242, 26, 255 ], "columns": { "lat": "pickup_latitude", "lng": "pickup_longitude", "altitude": null }, "isVisible": true, "visConfig": { "radius": 10, "fixedRadius": false, "opacity": 0.8, "outline": false, "thickness": 2, "strokeColor": null, "colorRange": { "name": "Global Warming", "type": "sequential", "category": "Uber", "colors": [ "#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300" ] }, "strokeColorRange": { "name": "Global Warming", "type": "sequential", "category": "Uber", "colors": [ "#5A1846", "#900C3F", "#C70039", "#E3611C", "#F1920E", "#FFC300" ] }, "radiusRange": [ 0, 50 ], "filled": true }, "hidden": false, "textLabel": [ { "field": null, "color": [ 255, 255, 255 ], "size": 18, "offset": [ 0, 0 ], "anchor": "start", "alignment": "center" } ] }, "visualChannels": { "colorField": null, "colorScale": "quantile", "strokeColorField": null, "strokeColorScale": "quantile", "sizeField": null, "sizeScale": "linear" } } ], "interactionConfig": { "tooltip": { "fieldsToShow": { "some-id": [ { "name": "tpep_pickup_datetime", "format": null } ] }, "compareMode": false, "compareType": "absolute", "enabled": true }, "brush": { "size": 0.5, "enabled": false }, "geocoder": { "enabled": false }, "coordinate": { "enabled": false } }, "layerBlending": "normal", "splitMaps": [], "animationConfig": { "currentTime": null, "speed": 1 } }, "mapState": { "bearing": 0, "dragRotate": false, "latitude": 40.74702835, "longitude": -22.8534467370726, "pitch": 0, "zoom": 5, "isSplit": false }, "mapStyle": { "styleType": "dark", "topLayerGroups": {}, "visibleLayerGroups": { "label": true, "road": true, "border": false, "building": true, "water": true, "land": true, "3d building": false }, "threeDBuildingColor": [ 9.665468314072013, 17.18305478057247, 31.1442867897876 ], "mapStyles": {} },
//   dataSets: [{
//     info: {
//       label: 'Some label',
//       id: 'some-id'
//     },
//     data: {
//       fields: [
//         {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
//         {name: 'pickup_longitude', format: '', type: 'real'},
//         {name: 'pickup_latitude', format: '', type: 'real'}
//       ],
//       rows: [
//         ['2015-01-15 19:05:39 +00:00', Math.random() * -73.99389648, 40.75011063],
//         ['2015-01-15 19:05:39 +00:00', Math.random() * -73.97642517, 40.73981094],
//         ['2015-01-15 19:05:40 +00:00', Math.random() * -73.96870422, 40.75424576]
//       ]
//     }
//   }]
// })
