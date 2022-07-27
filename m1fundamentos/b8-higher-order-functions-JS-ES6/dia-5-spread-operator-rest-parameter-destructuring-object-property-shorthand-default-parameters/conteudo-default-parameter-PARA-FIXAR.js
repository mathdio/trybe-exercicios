// Com o ES6, podemos pré-definir um parâmetro padrão para a função

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting( ); // // Welcome usuário!

// Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.

// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));