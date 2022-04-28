class Thermostat{
  constructor(){
    this.Temp = 20;
    this.powerSMode = true;
  }
  up() {
    if ( this.Temp >= 25 && this.powerSMode === true){
      return 'Maximum temprature of 25 reached';
    } else if ( this.Temp >= 32 && this.powerSMode === false) {
      return 'Maximum temprature of 32 reached';
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
  reset(){
    this.Temp = 20
  }
  currentUsage(){
    if (this.Temp < 18){
      return 'Low usage';
    } else if (this.Temp <= 25) {
      return 'Medium usage';
    } else {
      return 'High usage';
    }
  }
}
module.exports = Thermostat;
