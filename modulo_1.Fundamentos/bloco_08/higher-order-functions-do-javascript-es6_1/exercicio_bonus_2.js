// Bônus - PARTE 2

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => {
    const warriorAction = warriorDamage();
    dragon.healthPoints -= warriorAction;
    warrior.damage = warriorAction;
  },
  mageTurn: (mageDamageAndMana) => {
    const mageAction = mageDamageAndMana(mage);
    const mageDamage = mageAction.damageDealt;
    const { manaSpent } = mageAction;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageAndMana);
