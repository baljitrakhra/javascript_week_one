require('./weatherapi')

class Weather{
  constructor (api) {
    this.api = api
    this.array = []
  }


fetch = (city) => {
  this.api.fetchWeatherData(city, (weatherData) => {
    this.data = weatherData;
  });
}

getWeatherData = () => {
  return this.data;
}

displayWeather = () =>{
  console.log("City :", this.array[0]);
  console.log("Weather :", this.array[1]);
  console.log("Temprature :", this.array[2]);
  console.log("Feels Like :", this.array[3]);
  console.log("Humidity :", this.array[4]);
}
arrayFunction = () => {
  this.array[0] = this.data.name;
  this.array[1] = this.data.weather[0].description;
  this.array[2] = this.data.main.temp;
  this.array[3] = this.data.main.feels_like;
  this.array[4] = this.data.main.humidity;

}

}

module.exports = Weather;