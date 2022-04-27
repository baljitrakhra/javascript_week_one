const ShoppingBasket = require('./shoppingbasket');
const Candy = require('./candy');

describe('Basket',() => {
  
  it('adds items to the basket', () => {
    const candy = new Candy('Mars', 4.99);
    let basket = new ShoppingBasket();
    basket.addItem(candy);
    // const mockBasket = { addItem: (Candy) => ['Mars', 4.99] }
    // const candy = new Candy;
    // mockBasket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('uses mocking to do this test', () => {
    
  });
});