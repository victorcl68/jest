// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test('ocupado', () => {
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    const errorString = 'Infelizmente não podemos atender...';
    // Coloquei a string de erro em uma constante, pois a linha estava com tamanho muito grande de acordo com o ESLint
    return expect(answerPhone(false)).rejects.toEqual(new Error(errorString));
  });
});
