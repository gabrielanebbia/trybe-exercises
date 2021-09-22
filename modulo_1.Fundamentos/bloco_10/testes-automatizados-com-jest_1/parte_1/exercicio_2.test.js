const myRemove = require('./exercicio_2');

describe('Testing the function myRemove', () => {
  it('if removes an item from the array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('if does not modify the array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
 });

  it('if does not have the second parameter does not change the array', () => {
    expect(myRemove([5, 6, 7])).toEqual([5, 6, 7]);
 });

  it('if the past parameter does not exist in the array it does not change the array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
 });
});
