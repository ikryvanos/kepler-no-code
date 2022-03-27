# Kepler no code

## How to use
1. Add output artifacts from `./release/<version>` to you page
1. Create tag to put kepler content inside (most likely to use `div`)
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

## How to use it in Mode Analytics
Call preprocessor to parse data and provide it into to kepler tag
```js
const keplerDataset = processModeAnalyticsDatasets(datasets);
``` 

## How to use it with other formats
You could use other kepler preprocessors from [here](https://docs.kepler.gl/docs/api-reference/processors/processors)

## Examples
Display data from mode analytics
```html
<script src="https://cdn.jsdelivr.net/gh/ikryvanos/kepler-no-code/releases/v1/js/chunk.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ikryvanos/kepler-no-code/releases/v1/js/main.js"></script>
<script>
  var keplerDataset = processModeAnalyticsDatasets(datasets);
</script>
<div
    data-widget-type='kepler.gl'
    data-mapbox-token="pk.eyJ1IjoiaWhhcmtyeXZhbm9zIiwiYSI6ImNrMWtmYjRqeDE2YnIzZGp5bmkzdmNicXUifQ.Y3f3Cmz3xebuejGbi9SIeA"
    data-width="1600"
    data-height="800"
    onLoad="initKepler(this, keplerDataset)"
/>
```
