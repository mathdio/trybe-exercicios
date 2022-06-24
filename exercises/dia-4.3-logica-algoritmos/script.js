// 1 - Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;
for (i = 10; i > 0; i -= 1) {
  fatorial = fatorial * i;
}
console.log(fatorial);

// 2 - 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Matheus';
let reverseWord = "";

for (i = word.length - 1; i >= 0; i -= 1) {
  reverseWord += word[i]
}

console.log(reverseWord);

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];

// MENOR PALAVRA
// for (let i = 1; i < array.length; i += 1) {
//   if (array[i].length < biggestWord.length) {
//     biggestWord = array[i]
//   }
// }

// console.log(biggestWord);

// MAIOR PALAVRA
for (let i = 1; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i]
  }
}

console.log(biggestWord);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo;

for (let number = 2; number <= 50; number += 1) {
  let isPrime = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorPrimo = number;
  }
}

console.log(maiorPrimo);

// BÔNUS
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

n = 5;
let line = "";

for (i = 1; i <= n; i += 1){
  line += "*";
}
for (i = 1; i <= n; i += 1) {
  console.log(line);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

n = 5;
let line = "";

for (i = 1; i <= n; i += 1){
  line += "*";
  console.log(line);
}

// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****

n = 5;
let symbol = '*';
let line = "";
inputPosition = n

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      line += ' ';
    } else {
      line += "*";
    }
  }
  console.log(line);
  line = '';
  inputPosition -= 1;
};

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****

// código do gabarito melhorado por mim
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix - 1;
let controlRight = midOfMatrix + 1;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 9;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex === controlLeft || columnIndex === controlRight || lineIndex === midOfMatrix) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let n = 50;
let divisible = 0;

for (i = 0; i <= n; i += 1) {
  if (n % i === 0) {
    divisible += 1;
  }
}

if (divisible > 2) {
  console.log(n + ' não é primo.');
} else if (divisible === 2) {
  console.log(n + ' é primo!');
}
