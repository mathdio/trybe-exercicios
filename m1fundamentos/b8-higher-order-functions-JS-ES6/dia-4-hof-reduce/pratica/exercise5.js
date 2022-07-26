// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   return names.reduce((acc, name) => {
//     return acc + name.split('')
//     .filter((letter) => letter === 'a' || letter === 'A').length
//   }, 0);
// };

function containsA() {
  return names.reduce((acc, name) => 
    acc + name.split('').reduce((secondAcc, letter) => {
      if (letter === 'a' || letter === 'A') return secondAcc + 1
      return secondAcc;
    }, 0), 0);
};

console.log(containsA());