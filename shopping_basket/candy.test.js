const Candy = require('./candy');
// jest.mock('./candy');

describe('candy',() => {
  
  it('accept name and price at initialisation', () => {
    const newClass = new Candy('Mars', 4.99);
    expect(newClass.name).toBe('Mars');
    expect(newClass.price).toBe(4.99);
  });
  it('returns then name', () => {
    const newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getName()).toBe('Mars');
    // const mockCandy = new Candy('Mars', 4.99);
    // mockCandy.getName.mockImplementation(() => 'Mars');
  });
  it('returns the price', () => {
    const newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getPrice()).toBe(4.99);
  });
})