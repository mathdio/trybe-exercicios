const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turnoNoite = {
  turno: 'noite'
};

Object.assign(lesson2, turnoNoite);
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson3));

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const ObjLength = (obj) => Object.keys(obj).length;

console.log(ObjLength(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => Object.values(obj);

console.log(listValues(lesson3));
// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function studentAmount(obj) {
  let total = 0;
  for (item in obj) {
    total += obj[item].numeroEstudantes;
  }
  console.log(total);
};
studentAmount(allLessons);

// 7 - Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

function getValueByNumber(obj, keyIndex) {
  return Object.values(obj)[keyIndex];
};
console.log(getValueByNumber(lesson2, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

function verifyPairKeyValue(obj, key, value) {
  for (let index in obj) {
    if (index === key) {
      if (value === obj[index]) {
        return true;
      } else {
        return false;
      }
    }
  }
};
console.log(verifyPairKeyValue(lesson3, 'turno', 'noite'));
console.log(verifyPairKeyValue(lesson1, 'materia', 'Matemática'));

// BÔNUS
// 1 - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

console.log(allLessons);

function studentsInMathClass(subject) {
  let amountInClass = 0;
  for (let index in allLessons) {
    if (allLessons[index].materia === subject) {
      amountInClass += allLessons[index].numeroEstudantes;
    }
  }
  return amountInClass;
};
console.log(studentsInMathClass('Matemática'));

// 2 - 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.
// console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

function createReport(obj, professor) {
  let report = {
    professor: professor,
    aula: [],
    estudantes: 0,
  };
  // let amountInClass = 0;
  for (let index in obj) {
    if (obj[index].professor === professor) {
      report.aula.push(obj[index].materia);
      report.estudantes += obj[index].numeroEstudantes;
    }
  }
  return report;
};
console.log(createReport(allLessons, 'Maria Clara'));