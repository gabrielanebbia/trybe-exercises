const fs = require('fs').promises;

const nomeDoArquivo = './simpsons.json';

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile(nomeDoArquivo, JSON.stringify(newSimpsons))
    .then(() => console.log('Arquivo salvo'))
}

module.exports = { getSimpsons, setSimpsons };
