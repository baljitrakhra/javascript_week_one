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
});