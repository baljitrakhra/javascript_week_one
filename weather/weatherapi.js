
const apiKey = require('./apiKey');
const got = require('got')

class WeatherApi{
  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    got(apiUrl).then((response) => {
      callback(JSON.parse(response.body));
    });
  }
}

module.exports = WeatherApi;