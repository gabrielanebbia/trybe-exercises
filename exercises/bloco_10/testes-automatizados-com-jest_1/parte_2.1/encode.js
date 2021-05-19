function encode(lowercaseVowels) {
  let fraseEncode = [''];
  for (let index = 0; index < lowercaseVowels.length; index += 1) {
    switch (lowercaseVowels[index]) {
    case 'a':
      fraseEncode += '1';
      break;
    case 'e':
      fraseEncode += '2';
      break;
    case 'i':
      fraseEncode += '3';
      break;
    case 'o':
      fraseEncode += '4';
      break;
    case 'u':
      fraseEncode += '5';
      break;
    default:
      fraseEncode += lowercaseVowels[index];
    }
  }
  return fraseEncode;
}

console.log(encode('hi there!'));
