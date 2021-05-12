function lowestValueIndex (integerArray) {
  let higherNumber = 0;
  for (let index in integerArray) {
    if (integerArray[higherNumber] > integerArray[index]){
      higherNumber = index;
    }
  }
  return higherNumber;

};

console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3])); // 6
