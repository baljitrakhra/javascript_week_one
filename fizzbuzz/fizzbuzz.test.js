const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz',() => {
  it('return Fizz when it is 3', () =>{
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('return buzz when it is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('return FizzBuzz when it is 15',() => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('return 8 when it is 8',() => {
    expect(fizzBuzz(8)).toBe(8);
  });
});