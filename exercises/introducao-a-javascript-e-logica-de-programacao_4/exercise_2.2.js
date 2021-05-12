function highestValueIndex (integerArray) {
  let higherNumber = 0;
  for (let index in integerArray) {
    if (integerArray[higherNumber] < integerArray[index]){
      higherNumber = index;
    }
  }
  return higherNumber;

};

console.log(highestValueIndex([2, 3, 6, 7, 10, 1])); //4
