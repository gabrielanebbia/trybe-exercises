function verificaFimPalavra (word, ending) {
  word = word.split('');
  ending = ending.split('');
  let result = true;

  for(let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] !== ending[index]) {
      result = false;
    }
  }
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); // true
console.log(verificaFimPalavra('joaofernando', 'fernan')) //false
