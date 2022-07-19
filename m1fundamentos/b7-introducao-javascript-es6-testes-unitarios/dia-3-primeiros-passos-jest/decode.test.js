const decode = require('./decode.js')

// 🚀 4 - Para as funções encode e decode crie os seguintes testes em Jest:
//1 - Teste se encode e decode são funções;
//2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
//4 - Teste se as demais letras/números não são convertidos para cada caso;
//5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('tests the function encode', () => {
  it('tests if is function', () => {
    expect(typeof decode).toEqual('function');
  });

  it('tests if 12345 returns aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('tests if the decode do not occur', () => {
    expect(decode('67890')).toEqual('67890');
  });

  it('tests string length', () => {
    expect(decode('12345').length).toEqual(5);
  });
});