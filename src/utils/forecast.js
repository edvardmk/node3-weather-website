const request = require('request')

const forecast = (latitude, longitude, callback) => {
  url = `http://api.weatherstack.com/current?access_key=ef9c0967f2cb7bcf8db15688f0f3bf4f&query=${latitude},${longitude}`
  
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined)
    } else if (!body.current || body.current.weather_descriptions.length === 0) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.temperature} degrees out.`)
    }
  })
}

module.exports = forecast