// 🚀 1 - Você está pronto para um desafio?! Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando:
// A função;
// Os testes para essa função;
// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (firstName, lastName, specialities). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada". Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível".

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  for (let person in professionalBoard) {
    if (professionalBoard[person].id === id) {
      if (professionalBoard[person][detail] === undefined) {
        throw new Error('Informação indisponível');
      }
      return `ID: ${id}, ${detail}: ${professionalBoard[person][detail]}`
    }
  }
  throw new Error('ID não identificada')
};
console.log(searchEmployee('4456-4', 'lastName'));

module.exports = searchEmployee;