class Thermostat{
  constructor(){
    this.Temp = 20;
    this.powerSMode = true;
  }
  up() {
    if ( this.Temp >= 25 ){
      return 'Maximum temprature of 25 reached';
    } else {
      return this.Temp += 1;
  }
      
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
  setPowerSavingMode(condition) {
    if (condition === false){
      this.powerSMode = false;
    }else {
      this.powerSMode = true
    }
  }
}
module.exports = Thermostat;
