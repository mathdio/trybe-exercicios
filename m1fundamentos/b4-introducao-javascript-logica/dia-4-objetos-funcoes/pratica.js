// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log('Bem-vinda, ' + info.personagem);

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'
console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let chaves in info) {
  console.log(chaves);
}

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let chaves in info) {
  console.log(info[chaves]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!


let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let property in info) {
  if (property === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[property] + ' e ' + info2[property]);
  }
}

// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

let object = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(object);
console.log(leitor);

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// Parte II - Funções
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
  let palindrome = "";
  for (let i = (palavra.length - 1); i >= 0; i -= 1){
    palindrome += palavra[i];
  }
  if (palindrome === palavra) {
    console.log('1');
    return true;
  } else {
    console.log('2');
    return false;
  }
}

verificaPalindrome('arara');

function verificaPalindrome(palavra) {
  let palindrome = palavra.split('').reverse().join('');
  
  if (palindrome === palavra) {
    console.log('1');
    return true;
  } else {
    console.log('2');
    return false;
  }
}

verificaPalindrome('arara');


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

// com loop for
function verifySmallestIndex(array) {
  let highestIndex = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestIndex) {
      highestIndex = array[i];
    }
  }
  console.log(array.indexOf(highestIndex));
  return array.indexOf(highestIndex);
}

let teste = [2, 3, 6, 7, 10, 1];
verifySmallestIndex(teste);

//com for in
function verifySmallestIndex(array) {
  let highestIndex = 0;
  for (let index in array) {
    if (array[index] > array[highestIndex]) {
      highestIndex = index;
    }
  }
  console.log(highestIndex);
  return highestIndex;
}

let teste = [2, 3, 6, 7, 10, 1];
verifySmallestIndex(teste);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

// com loop for
function verifySmallestIndex(array) {
  let smallestIndex = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < smallestIndex) {
      smallestIndex = array[i];
    }
  }
  console.log(array.indexOf(smallestIndex));
  return array.indexOf(smallestIndex);
}

let teste = [2, 4, 6, 7, 10, 0, -3];
verifySmallestIndex(teste);

// com for in 
function verifySmallestIndex(array) {
  let smallestIndex = 0;
  for (let index in array) {
    if (array[index] < array[smallestIndex]) {
      smallestIndex = index;
    }
  }
  console.log(smallestIndex);
  return smallestIndex;
}

let teste = [2, 4, 6, 7, 10, 0, -3];
verifySmallestIndex(teste);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// com loop for
function verifyBiggestName(array) {
  let BiggestName = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > BiggestName.length) {
      BiggestName = array[i];
    }
  }
  console.log(BiggestName);
  return BiggestName;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
verifyBiggestName(teste);

//com for in
function verifyBiggestName(array) {
  let BiggestName = array[0];
  for (let index in array) {
    if (array[index].length > BiggestName.length) {
      BiggestName = array[index];
    }
  }
  console.log(BiggestName);
  return BiggestName;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
verifyBiggestName(teste);


//  🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

//apenas for in
function numeroMaiorRepeticao(array) {
  let numeroMaisRepetido = 0;
  let indexRepetido = 0;
  
  for (let index in array) {
    let auxiliarContador = 0;
    let verifyNumber = array[index];

    for (let index2 in array) {
      if (array[index2] === array[index]) {
        auxiliarContador += 1;
      }
    }
    
    if (auxiliarContador > numeroMaisRepetido) {
      numeroMaisRepetido = auxiliarContador;
      indexRepetido = index;
    }
  }
  console.log(array[indexRepetido]);
  return array[indexRepetido];
}

let teste = [2, 3, 2, 5, 8, 2, 3];
numeroMaiorRepeticao(teste);


//utilizando loop for e objeto
function numeroMaiorRepeticao(array) {
  let numbers = {};

  for (let i = 0; i < array.length; i += 1) {
    let chave = array[i];

    if (numbers[chave] === undefined){
      numbers[chave] = 1;
    } else {
      numbers[chave] += 1;
    }
  }
  let numeroMaisRepetido = 0;
  let auxiliarContador = 0;

  for (let index in numbers) {
    if (numbers[index] > auxiliarContador) {
      auxiliarContador = numbers[index];
      numeroMaisRepetido = index;
    }
  }
  return numeroMaisRepetido;
}

let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(numeroMaiorRepeticao(teste));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n = 5;

function sumN(natural) {
  let sum = 0;
  for (let i = 1; i <= natural; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(sumN(n));


// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verifyEnding(palavra, fim) {
  let checker = '';
  let countVerify = palavra.length - fim.length

  for (let i = countVerify; i < palavra.length; i += 1) {
    checker += palavra[i];
  }

  if (checker === fim) {
    return true;
  } else {
    return false;
  }
}

let word = 'amador';
let ending = 'dor';

console.log(verifyEnding(word, ending));

// BÔNUS
// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.


let romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};  

function inRomans(romanAlgarism) {
  let result = 0;
  let lastNumber = 0;

  for (let i = 0; i < romanAlgarism.length; i += 1) {
    let actualNumber = romanAlgarism[i];
    
    for (let chave in romans) {
      if (actualNumber === chave) {
        if (lastNumber === 0) {
          result += romans[chave];
          lastNumber = romans[chave];
        } else if (lastNumber < romans[chave]) {
          result -= lastNumber;
          result += (romans[chave] - lastNumber);
          lastNumber = romans[chave];
        } else if (lastNumber > romans[chave] || lastNumber === romans[chave]) {
          result += romans[chave];
          lastNumber = romans[chave];
        }
      }
    }
  }
  return result;
}

let teste = 'CMXLIX';
console.log(inRomans(teste));

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array) {
  let newArray = [];

  for (let generalIndex = 0; generalIndex < array.length; generalIndex += 1) {
    for (let innerIndex = 0; innerIndex < array[generalIndex].length; innerIndex += 1) {
      if (array[generalIndex][innerIndex] % 2 === 0) {
        newArray.push(array[generalIndex][innerIndex]);
      }
    }
  }
  return newArray;
}

console.log(arrayOfNumbers(vector));

//🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function contarCesta(array) {
  let checkedBasket = {};

  for (let i = 0; i < array.length; i += 1) {
    if (checkedBasket[array[i]] === undefined) {
      checkedBasket[array[i]] = 1;
    } else {
      checkedBasket[array[i]] += 1;
    }
    
  }

  let messageBasket = [];

  for (let item in checkedBasket) {
    messageBasket.push(' ' + checkedBasket[item] + ' ' + item + 's');
  }

  console.log('Sua cesta possui: ' + messageBasket);
};

contarCesta(basket);

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

console.log('O morador do bloco 2 de nome ' + moradores.blocoDois[moradores.blocoDois.length -1].nome + ' ' + moradores.blocoDois[moradores.blocoDois.length -1].sobrenome + ' mora no ' + moradores.blocoDois[moradores.blocoDois.length -1].andar + 'º andar, apartamento ' + moradores.blocoDois[moradores.blocoDois.length -1].apartamento);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.

for (let morador in moradores.blocoUm) {
  console.log(moradores.blocoUm[morador].nome + ' ' + moradores.blocoUm[morador].sobrenome);
}

for (let morador in moradores.blocoDois) {
  console.log(moradores.blocoDois[morador].nome + ' ' + moradores.blocoDois[morador].sobrenome);
}

// for (let i = 0; i < moradores.blocoUm.length; i += 1) {
//   console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
// }