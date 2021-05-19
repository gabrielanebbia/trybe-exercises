function decode(uppercaseVowels) {
  let fraseDecode = [];
  for (let index = 0; index < uppercaseVowels.length; index += 1) {
    switch (uppercaseVowels[index]) {
    case '1':
      fraseDecode += 'a';
      break;
    case '2':
      fraseDecode += 'e';
      break;
    case '3':
      fraseDecode += 'i';
      break;
    case '4':
      fraseDecode += 'o';
      break;
    case '5':
      fraseDecode += 'u';
      break;
    default:
      fraseDecode += uppercaseVowels[index];
    }
  }
  return fraseDecode;
}

console.log(decode('h3 th2r2!'));
