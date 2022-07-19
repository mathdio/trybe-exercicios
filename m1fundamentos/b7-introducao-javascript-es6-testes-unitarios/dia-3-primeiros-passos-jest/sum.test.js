const sum = require('./sum.js');

// 🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//1 - Teste se o retorno de sum(4, 5) é 9
//2 - Teste se o retorno de sum(0, 0) é 0
//3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
//4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('tests the function sum', () => {
  test('sums 4 and 5 returning 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  
  it('sums 0 and 0 returning 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  
  it('it throws a error if any value is string', () => {
    expect(() => {
      sum(4, "5")
    }).toThrow(Error)
  });
  
  it('verifies the message error when a parameter is a string', () => {
    expect(() => {
      sum(4, "5")
    }).toThrowError('parameters must be numbers')
  });
});