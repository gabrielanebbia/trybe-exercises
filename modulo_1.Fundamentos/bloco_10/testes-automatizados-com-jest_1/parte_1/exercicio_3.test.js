const myRemoveWithoutCopy = require('./exercicio_3');

describe('Testing the function myRemoveWithoutCopy', () => {

  it('if removes an item from the array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('if does not modify the array', () => {
    const newArr = [5, 6, 7, 8];
    myRemoveWithoutCopy(newArr, 5);
    expect(newArr.length).toEqual(3);
 });

  it('if does not have the second parameter does not change the array', () => {
    expect(myRemoveWithoutCopy([5, 6, 7])).toEqual([5, 6, 7]);
 });

  it('if the past parameter does not exist in the array it does not change the array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
 });

});
