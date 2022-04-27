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
  it('returns a message that temp cannot go below 10 degree', () => {
    const therm1 = new Thermostat();
    for(i = 1; i < 11; i++) {
      therm1.down();
    }
    expect(therm1.down()).toEqual('Thermostat is set on minimum temprature of 10 degree');
  });
});