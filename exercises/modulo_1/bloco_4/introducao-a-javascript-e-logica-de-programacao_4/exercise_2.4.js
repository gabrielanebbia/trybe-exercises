function biggestName(word) {
  let biggestWord = word[0];
  for (let index in word) {
    if (biggestWord.length < word[index].length) {
      biggestWord = word[index];
    }
  }
  return biggestWord;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda
