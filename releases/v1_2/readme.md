# About
Kepler no-code was designed to help in creation GeoData visualization without coding. And it adapted to be used in systems like:
- ModeAnalytics

You able to put several lines of HTML and powerful visualization tool with build-in editor would available for you.

## How tou use
When you had added a tool to you website you able to add visualization layers, filter data and do other things available for kepler.gl. To get more details please visit [official user guides](https://docs.kepler.gl/docs/user-guides).

To save you configuration you need:
1. click "share"
1. click "save map"
1. copy HTML tag
1. replace your container tag with a new version in you source HTML page code
1. save you page and check is kepler configuration were saved

## How to add to you page
1. Add bundle to you web page
    1. You could use [https://cdn.jsdelivr.net](https://cdn.jsdelivr.net) for this bundle url would be `https://cdn.jsdelivr.net/gh/ikryvanos/kepler-no-code/releases/v1_2/bundle.js`
1. Create container tag to put kepler content inside (most likely to use `div`)
    1. Add following attributes:
        1. `data-widget-type='kepler.gl'`
        1. `data-mapbox-token="<mapbox-access-token>"`
        1. `data-width="<desigred width>"`
        1. `data-height="<desigred height>"`
        1. `onLoad="initKepler(this, <you js var with datasets>)"`
        
### How data sets should look like
It should be an array of data sets to display. Here the example
```js
[{
    info: {
      label: 'SOME VISIBLE NAME OF DATASET',
      id: 'UNIQUE ID OF ID'
    },
    data: {
      fields: [
        // fields of the data set
        {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
        {name: 'pickup_longitude', format: '', type: 'real'},
        {name: 'pickup_latitude', format: '', type: 'real'}
      ],
      rows: [
        // dataset values
        ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
        ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
        ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576]
      ]
    }
}]
```

### How to use it in Mode Analytics
Call preprocessor to parse data and provide it into to kepler tag
```js
const keplerDataset = processModeAnalyticsDatasets(datasets);
``` 

### How to use it with other formats
You could use other kepler preprocessors from [here](https://docs.kepler.gl/docs/api-reference/processors/processors)

### Examples
Display data from mode analytics
```html
<div
    data-widget-type='kepler.gl'
    data-mapbox-token="pk.eyJ1IjoiaWhhcmtyeXZhbm9zIiwiYSI6ImNrMWtmYjRqeDE2YnIzZGp5bmkzdmNicXUifQ.Y3f3Cmz3xebuejGbi9SIeA"
    data-width="1600"
    data-height="800"
    onLoad="initKepler(this, processModeAnalyticsDatasets(datasets))"
/>
<script src="https://cdn.jsdelivr.net/gh/ikryvanos/kepler-no-code/releases/v1_2/bundle.js" sync></script>
```

## How to troubleshoot
Add `KEPLER_NO_CODE_LOGGER_ENABLED=true` to local storage, it would enable debug logging
