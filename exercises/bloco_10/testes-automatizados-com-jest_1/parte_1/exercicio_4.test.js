const myFizzBuzz = require('./exercicio_4');

describe('Testing the function myFizzBuzz', () => {

  it('if number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('if number is divisible by 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
 });

  it('if number is divisible by 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
 });

  it('if number is not divisible by 3 and 5', () => {
    expect(myFizzBuzz(17)).toEqual(17);
 });

  it('if a parameter that is not a number', () => {
  expect(myFizzBuzz('cinco')).toEqual(false);
});

});
