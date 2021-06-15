function verificaPalindrome(word) {
  let letters = word.split('');
  let palindrome = true;
  for (let index in letters) {
    if (letters[index] != word[(word.length - 1) - index]) {
      palindrome = false;
    }
  }
  return palindrome;
};

// Outra forma de resolver (Gabarito):

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara')); // true
console.log(verificaPalindrome('desenvolvimento')); // false
