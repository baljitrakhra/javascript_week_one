const Thermostat = require('./thermostat');

describe('Thermostat', () => {
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
  it('set the power mode is true by default', () => {
    const therm2 = new Thermostat();
    expect(therm2.powerSMode).toEqual(true);
  });
  it('powersaving mode can be turned off', () => {
    therm.setPowerSavingMode(false);
    expect(therm.powerSMode).toEqual(false);
  });
  it('powersaving mode can be turned on', () => {
    therm.setPowerSavingMode(false);
    therm.setPowerSavingMode(true);
    expect(therm.powerSMode).toEqual(true);
  });
  it('in power saving mode set the max temperature to 25', () => {
    const therm3 = new Thermostat
    for (let i = 0 ; i < 5 ; i++) {
      therm3.up();
    }
    expect(therm3.up()).toEqual('Maximum temprature of 25 reached');
  });
  it('in power saving mode off the max temperature set to 32', () => {
    const therm4 = new Thermostat();
    therm4.setPowerSavingMode(false);
    for (let i = 0 ; i < 12 ; i++) {
      therm4.up();
    }
    expect(therm4.up()).toEqual('Maximum temprature of 32 reached');
  });
});