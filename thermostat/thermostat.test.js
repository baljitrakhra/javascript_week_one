const Thermostat = require('./thermostat');

describe('Thermostate', () => {
  const therm = new Thermostat;
  it('is initalised with an temperature of 20 degreess', () => {
    expect(therm.Temp).toBe(20);
  });
  it('lets you increase thermostat temperature by one degree', () => {
    therm.up();
    expect(therm.Temp).toBe(21);
  });
  it('lets you decrease thermostat temperature by one degree', () => {
    therm.up();
    therm.down();
    expect(therm.Temp).toBe(21);
  });
  it('shows the current temprature', () => {
    therm.getTemprature();
    expect(therm.Temp).toBe(21);
  });
});