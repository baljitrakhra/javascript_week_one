class Thermostat{
  constructor(){
    this.Temp = 20;
  }
  up() {
    return this.Temp += 1;  
  }
  down() {
    return this.Temp -= 1;  
  }
  getTemprature(){
    return this.Temp;
  }
}
module.exports = Thermostat;
