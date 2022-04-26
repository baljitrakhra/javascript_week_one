const multiply = require('./multiply')
describe('multiply',() =>{
  it('multiply 3 and 6',() =>{
    expect(multiply(3,6)).toBe(18);
  });
  it('mutiply 8 and 5',() =>{
    expect(multiply(8,5)).toBe(40);
  });
});