const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

function getSimpsons() {
  return fs.readFile(nomeDoArquivo, 'utf-8')
    .then(fileContent => JSON.parse(fileContent))
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
      process.exit(1);
    });
}

function setSimpsons(newSimpsons) {
  return fs.writeFile(nomeDoArquivo, JSON.stringify(newSimpsons))
    .then(() => console.log('Arquivo salvo'))
    .catch((err) => console.error(err));
}

module.exports = { getSimpsons, setSimpsons };
