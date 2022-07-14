// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// 1 - Crie uma função que receba um número e retorne seu fatorial. Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial = (number) => {
  let factorialNumber = 1;
  for (let i = number; i > 0; i -= 1) {
    factorialNumber *= i;
  }
  return factorialNumber;
};
console.log(factorial(10));

const recursiveFactorial = (number) => number > 1 ? number * recursiveFactorial(number - 1) : 1;
console.log(recursiveFactorial(10));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra.

const longestWord = (string) => {
  const array = string.split(' ');
  let biggestWord = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > biggestWord.length) {
      biggestWord = array[i];
    }
  }
  console.log(biggestWord);
  return biggestWord;
};
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

// 2 - 🚀 Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'

const tryber = (nome) => {
  const phrase = `Tryber x aqui!`;
  const phraseArray = phrase.split(' ');
  for (let i = 0; i < phraseArray.length; i += 1) {
    if (phraseArray[i] === 'x') {
      phraseArray[i] = nome;
    }
  }
   return phraseArray.join(' ');
};

console.log(tryber('Matheus'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const tryberAbilities = (tryber) => {
  const skills = ['JS', 'HTML', 'CSS'];
  let result = `${tryber}
  Minhas três principais habilidades são:`
  skills.forEach((skill) => {
    result = `${result}
    - ${skill}`;
  });
  return result;
};
console.log(tryberAbilities(tryber('Matheus')));;