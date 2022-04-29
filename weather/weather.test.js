const Weather = require('./weather');

describe('Weather', () => {
  it('it gets the repo data fetched by the API class', () => {
  const mockedApi ={
    fetchWeatherData: (cityname, callback) => {
      callback({
        name: 'Bristol',
        description: 'some fake data'
      });
    }
  }
 

const weather = new Weather(mockedApi);
weather.fetch('Bristol');
expect(weather.getWeatherData()).toEqual({
  name: 'Bristol',
  description: 'some fake data'
})
});

  it('displays weather in a better format', () => {
  const mockedApi ={
    fetchWeatherData: (cityname, callback) => {
      callback({
        City:         'London',
        Weather:      'Clouds',
        Temperature:  18.4,
        Feels_like:   16.0,
        Humidity:     '64%'
      });
    }
  }

  const weather = new Weather(mockedApi);
  weather.fetch('Bristol');
  weather.arrayFunction();
  expect(weather.displayWeather()).toEqual( { City:         London,
                                              Weather:      Clouds,
                                              Temperature:  18.4,
                                              Feels_like:   16.0,
                                              Humidity:     '64%'
                                            });

  });
});