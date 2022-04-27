require('./candy');

class ShoppingBasket{
  constructor(){
    this.basket = [];
  }
  addItem(item) {
    this.basket.push(item.getPrice());
  }
  getTotalPrice() {
    let sum = 0
    for(let i = 0; i < this.basket.length; i++){
      sum += this.basket[i];
    }
    return sum;
  }
}

module.exports = ShoppingBasket;