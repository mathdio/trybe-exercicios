// 🚀 6 - A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:


function hydrate(string) {

  let regExp = /\d+/g;
  let stringNumber = string.match(regExp);
  let arrayNumber = [];
  let resultNumber = 0;

  for (let i = 0; i < stringNumber.length; i += 1) {
    arrayNumber.push(parseInt(stringNumber[i], 10));
    resultNumber += arrayNumber[i];
  }

  if (resultNumber === 1) {
    return `${resultNumber} copo de água`;
  }
  return `${resultNumber} copos de água`;
}

module.exports = hydrate;