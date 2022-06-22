// Exercícios de 11 programinhas
// # 1

let a = 10;
let b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// # 2

const a = 4;
const b = 3;

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
}

// # 3

const a = 40;
const b = 3;
const c = 7;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}

// # 4

const a = -1;

if (a > 0) {
  console.log("positive")
} else if (a < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// # 5

const angle1 = 60;
const angle2 = 40;
const angle3 = 80;
let sumAngles = angle1 + angle2 + angle3;
let positiveAngles = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (positiveAngles) {
  if (sumAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("erro: ângulo inválido");
}

// # 6

let piece = 'CAVALO';

switch(piece.toLowerCase()) {
  case 'rei':
    console.log("todos os lados, uma casa");
    break;
  case 'rainha':
    console.log("todos os lados, várias casas");
    break;
  case 'peão':
    console.log("ortogonalmente, uma casa");
    break;
  case 'cavalo':
    console.log("formato de L");
    break;
  case 'torre':
    console.log("ortogonalmente, várias casas");
    break;
  case 'bispo':
    console.log("verticalmente, várias casas");
    break;
  default:
    console.log("peça inválida")
    break;
}

// # 7

let score = 49;

if (score < 0 || score > 100) {
  console.log("nota inválida!");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// # 8

const a = 10;
const b = 7;
const c = 5;
let pares = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  pares = true;
}
console.log(pares);

// # 9

const a = 10;
const b = 6;
const c = 2;
let impares = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  impares = true;
}
console.log(impares);

// # 10 

const custo = 100;
const venda = 200;

if (custo >= 0 && venda >= 0) {
  const custoTotal = custo * 1.2;
  const lucro = 1000 * (venda - custoTotal);
  console.log(lucro)
} else {
  console.log("erro: valores negativos")
}

// # 11

const bruto = 3000;
let aliquotaINSS;
let aliquotaIR;

if (bruto <= 1556.94) {
  aliquotaINSS = bruto * 0.08;
} else if (bruto <= 2594.92) {
  aliquotaINSS = bruto * 0.09;
} else if (bruto <= 5189.82) {
  aliquotaINSS = bruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

const base = bruto - aliquotaINSS;

if (base <= 1903.98) {
  aliquotaIR = 0;
} else if (base <= 2826.65) {
  aliquotaIR = (base * 0.075) - 142.80;
} else if (base <= 3751.05) {
  aliquotaIR = (base * 0.15) - 354.80;
} else if (base <= 4664.68) {
  aliquotaIR = (base * 0.225) - 636.13;
} else {
  aliquotaIR = (base * 0.275) - 869.36;
} 

const liquido = base - aliquotaIR;
console.log(bruto);
console.log(aliquotaINSS);
console.log(base);
console.log(aliquotaIR);
console.log(liquido);