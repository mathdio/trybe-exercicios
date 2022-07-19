const myFizzBuzz = require('./myfizzbuzz.js')

// 🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('tests the funcion myFizzBuzz', () => {
  it('verifies if returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('verifies if returns fizz', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });

  it('verifies if returns buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  it('verifies if returns the number', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });

  it('verifies if returns false', () => {
    expect(myFizzBuzz('test')).toBeFalsy();
  });
});