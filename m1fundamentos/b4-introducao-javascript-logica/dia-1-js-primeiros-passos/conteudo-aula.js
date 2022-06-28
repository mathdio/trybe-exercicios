// # VARIÁVEIS

const myName = "Matheus";
const birthCity = "Fortaleza";
let birthYear = 1994;

console.log(myName, birthCity, birthYear);

birthYear = 2030;
console.log(birthYear);

birthCity = "Natal";
console.log(birthCity);
// contante

// # OPERAÇÕES

let base = 5;
let height = 8;
let area = base * height;
let perimeter = 2 * (base + height);

console.log(area, perimeter);

// # IF/ELSE, NOT, INCREMENTAR E DECREMENTAR

let score = 0;

if (score >= 80) {
  console.log("Aprovado.");
}

else if (score >= 60 && score < 80) {
  console.log("Lista de espera.");
}

else if (score < 60) {
  console.log("Reprovado.");
} 

let wallet = 5;
let banana = 8;

if (wallet >= banana) {
  console.log("Comprar");
}

else {
  console.log("Não comprar")
}

// incrementar (e decrementar)
wallet++
// wallet += 1 
// console.log(wallet += 1);
// console.log(++wallet);

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
console.log(!true);

// # SWITCH/CASE

let candidata = 'a';
switch (candidata) {
  case 'aprovada':
    console.log("você foi aprovada");
    break;

  case 'lista':
    console.log("você estpa na lista de espera");
    break;

  case 'reprovada':
    console.log("você foi reprovada");
    break;
  default:
    console.log("não se aplica")
}