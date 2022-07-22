// A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares (elemento1, elemento2), e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (2, 1), (3, 2), (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1. Novamente, o artigo do MDN é uma excelente fonte de informação para entender melhor.
// Veja agora se realizarmos uma simples modificação no retorno da função que ordena os números e veja o que acontece:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age)

console.log(people);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

people.sort((a, b) => b.age - a.age)

console.log(people);