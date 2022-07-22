// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (name) => {
  const employees = {
    id1: name('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: name('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: name('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const name = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto: nomeCompleto, email: `${email}@trybe.com`  }
}

console.log(newEmployees(name));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const checkBet = (betNumber, raffledNumber) => {
//   if (betNumber === raffledNumber) {
//     return `Parabéns, você ganhou!`
//   } else {
//     return `Tente novamente`
//   }
// }

const checkBet = (betNumber, raffledNumber) => (betNumber === raffledNumber ? `Parabéns, você ganhou!` : `Tente novamente`)

const raffle = (betNumber, checkBet) => {
  const raffledNumber = parseInt(Math.random() * 6);
  return checkBet(betNumber, raffledNumber);
}

console.log(raffle(1, checkBet));

// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
  // Uma resposta correta adiciona 1 ponto à pontuação final;
  // A ausência de uma resposta não altera a pontuação (quando for "N.A");
  // Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (gabarito, studentAnswers) => {
  let points = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (studentAnswers[i] !== 'N.A') {
      studentAnswers[i] === gabarito[i] ? points += 1 : points -= 0.5;
    }
  }
  return points;
}

const notaFinal = (gabarito, studentAnswers, checker) => {
  return checker(gabarito, studentAnswers);
};

console.log(notaFinal(gabarito, studentAnswers, checker));


