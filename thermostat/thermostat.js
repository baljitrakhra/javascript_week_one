class Thermostat{
  constructor(){
    this.Temp = 20;
  }
  up() {
    return this.Temp += 1;  
  }
  down() {
    if ( this.Temp <= 10 ){
      return 'Thermostat is set on minimum temprature of 10 degree';
    } else {
    return this.Temp -= 1;  
  }
  }
  getTemprature(){
    return this.Temp;
  }
}
module.exports = Thermostat;
