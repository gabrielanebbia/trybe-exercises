const assert = require('assert');

// escreva greet abaixo
const greet = (name, msg) => {
  if(!msg) return `Hi ${name}`;
    return `${msg} ${name}`;
};

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
