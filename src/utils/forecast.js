const request = require('request')

const forecast = (latitude, longitude, callback) => {
  url = `http://api.weatherstack.com/current?access_key=ef9c0967f2cb7bcf8db15688f0f3bf4f&query=${latitude},${longitude}`
  
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined)
    } else if (!body.current || body.current.weather_descriptions.length === 0) {
      callback('Unable to find location.', undefined)
    } else {
      const forecast = body.current
      callback(undefined, `${forecast.weather_descriptions[0]}. It is currently ${forecast.temperature} degrees out. It feels like ${forecast.temperature} degrees out. The humidity is ${forecast.humidity}%.`)
    }
  })
}

module.exports = forecast