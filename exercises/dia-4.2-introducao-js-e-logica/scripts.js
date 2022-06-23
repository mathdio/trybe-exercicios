// Exercício 1 - percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// 2 - some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log(sum);

// 3 - calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / numbers.length
console.log(average);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / numbers.length

if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// // 5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i]
  }
}

console.log(maior);


// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [4, 6];
let oddValues = 0;

for (i = 0; i < numbers.length; i += 1) {
  isOdd = numbers[i] % 2
  if (isOdd !== 0) {
    oddValues += 1;
  }
}

if (oddValues !== 0) {
  console.log('existem ' + oddValues + ' valores ímpares');
} else {
  console.log('nenhum valor ímpar encontrado');
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor)

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (i = 0; i < 25; i += 1) {
  numbers.push(i + 1);
}

console.log(numbers);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for (i = 0; i < 25; i += 1) {
  numbers.push(i + 1);
  console.log(numbers[i] / 2);
}

// BÔNUS 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
    if (numbers[secondIndex] > numbers[index]) {
      let position = numbers[secondIndex];
      numbers[secondIndex] = numbers[index];
      numbers[index] = position;
    }
  }
}

console.log(numbers);
