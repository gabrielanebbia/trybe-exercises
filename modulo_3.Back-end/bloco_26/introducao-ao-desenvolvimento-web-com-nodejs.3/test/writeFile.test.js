const { expect } = require('chai');
const writeFile = require('../writeFile');

describe('Executa a função writeFile', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = writeFile('file.txt', 'conteúdo do arquivo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = writeFile('file.txt', 'conteúdo do arquivo');

      expect(resposta).to.be.equals('ok');
    });
  });
});
