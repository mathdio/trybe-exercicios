const wakeUp = () => {
  return `Acordando!!`
};

const breakfast = () => {
  return `Bora tomar café!!`
};

const sleep = () => {
  return `Partiu dormir!!`
};

// Ao chamar a função doingThings:
const doingThings = (func) => {
  console.log(func());
}

doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!