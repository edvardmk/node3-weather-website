const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZWR2YXJkbWsiLCJhIjoiY2tja2VtdGM1MXRsNTJybzhvOXdiMm8zaCJ9.pR99of4SmxJlTDy7Tm9AQg&limit=1`

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to locaion services!', undefined)
    } else if (!body.features || body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode