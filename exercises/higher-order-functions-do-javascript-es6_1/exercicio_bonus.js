const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const numberDragonDamage = Math.floor(Math.random() * (dragon.strength - 15)) + 15;
  return numberDragonDamage;
};

console.log(dragonDamage(dragon));

const warriorDamage = () => {
  const warriorMin = warrior.strength;
  const warriorMax = warrior.strength * warrior.weaponDmg;
  const numberWarriorDamage = Math.floor(Math.random() * (warriorMax - warriorMin)) + warriorMin;
  return numberWarriorDamage;
};

console.log(warriorDamage(warrior));