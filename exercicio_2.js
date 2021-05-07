const checkResult = (game, numberRandom) => {
  game === numberRandom;
};

const resultGame = (game, checkResult) => {
  const numberRandom = Math.floor(Math.random() * 5) + 1;
  if (checkResult(game, numberRandom) === true) {
    return 'Parabéns você ganhou';
  }
    return 'Tente novamente';
};

console.log(resultGame(5, checkResult));
