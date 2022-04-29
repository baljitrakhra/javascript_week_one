require('./weatherapi')

class Weather{
  constructor (api) {
    this.api = api
  }


fetch = (city) => {
  this.api.fetchWeatherData(city, (weatherData) => {
    this.data = weatherData;
    console.log(this.data)
  });
}

getWeatherData = () => {
  return this.data;
}
}

module.exports = Weather;