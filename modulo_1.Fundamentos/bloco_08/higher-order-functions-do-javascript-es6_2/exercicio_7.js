const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

// É verdade que nenhum author nasceu no mesmo ano? 
// Resposta esperada: false

function authorUnique() {
  return books.every((book) =>
    books.every((book2) =>
      (book2.author.birthYear === book.author.birthYear)
      && (book2.author.name !== book.author.name)));
};

// Outra forma de escrever usando o some e o operador lógico not

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
};

// Algum item atende a condição? ou seja, o ano de nascimento de algum autor é igual ao outro? True
// Como o enunciado pede True para o caso de nenhum autor ter nascido no mesmo ano devemos inverter a lógica booleana (!books.some)
// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

assert.strictEqual(authorUnique(), expectedResult);
