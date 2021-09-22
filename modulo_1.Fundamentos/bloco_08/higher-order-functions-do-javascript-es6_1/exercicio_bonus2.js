// Bônus - PARTE 1
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
  return `Dragon => Ataque de ${numberDragonDamage}xp`;
};

console.log(dragonDamage(dragon));

const warriorDamage = () => {
  const warriorMin = warrior.strength;
  const warriorMax = warrior.strength * warrior.weaponDmg;
  const numberWarriorDamage = Math.floor(Math.random() * (warriorMax - warriorMin)) + warriorMin;
  return `Warrior => Ataque de ${numberWarriorDamage}xp`;
};

console.log(warriorDamage(warrior));

const mageDamageAndMana = () => {
  const mageMin = mage.intelligence;
  const mageMax = mageMin * 2;
  const totalMana = mage.mana;
  const consumedMana = 15;
  const turn = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente',
  };

  if (totalMana > consumedMana) {
    const numberMageDamage = Math.floor(Math.random() * (mageMax - mageMin)) + mageMin;
    turn.manaSpent = 15;
    turn.damage = numberMageDamage;
    return `Mago => Ataque de ${turn.damage}xp e ${turn.manaSpent} mana`;
  }
  return `Mago => Ataque de ${turn.damage}xp e ${turn.manaSpent} mana`;
};

// Bônus - PARTE 2
console.log(mageDamageAndMana(mage));

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => { //função que simula o turno do personagem warrior 
    const warriorAction = warriorDamage();
    dragon.healthPoints -= warriorAction;
    warrior.damage = warriorAction;
  };
};
gameActions.warriorTurn(warriorDamage);
