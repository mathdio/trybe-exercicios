// 1 - 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(false)
// 2 - 🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!' Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for (let secondIndex = 0; secondIndex < oddsAndEvens.length; secondIndex += 1) {
      if (oddsAndEvens[secondIndex] > oddsAndEvens[index]) {
        let aux = oddsAndEvens[secondIndex];
        oddsAndEvens[secondIndex] = oddsAndEvens[index];
        oddsAndEvens[index] = aux;
      }
    }
  }
  return oddsAndEvens;
};

// const sortOddsAndEvens = () => {
//   oddsAndEvens.sort();
//   return oddsAndEvens;
// };

console.log(sortOddsAndEvens());
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);