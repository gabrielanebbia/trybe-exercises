function hydrate(drinks) {
  let totalWater = 0;

  const numberDrinks = drinks.match(/\d+/g).map(Number);
  for (let index = 0; index < numberDrinks.length; index += 1) {
    totalWater += numberDrinks[index];
  }
  return (totalWater === 1) ? totalWater += ' copo de água' : totalWater += ' copos de água';
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;
