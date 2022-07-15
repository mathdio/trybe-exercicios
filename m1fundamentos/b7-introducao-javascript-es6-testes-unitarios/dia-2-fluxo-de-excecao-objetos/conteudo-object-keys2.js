const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function skills(obj) {
  const skillsArray = Object.keys(obj);
  for (let skill in skillsArray) {
    console.log(`${skillsArray[skill]}, Nível: ${obj[skillsArray[skill]]}`);
  }
};
skills(student2);