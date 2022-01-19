const { expect } = require('chai');
const verifyNumber = require('../verifyNumber');

describe('Executa a função verifyNumber', () => {
  describe('1 - Quando o número for maior que zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = verifyNumber(1);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = verifyNumber(1);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('2 - Quando o número for menor que zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = verifyNumber(-1);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = verifyNumber(-1);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('3 - Quando o número for igual a zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = verifyNumber(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = verifyNumber(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});
