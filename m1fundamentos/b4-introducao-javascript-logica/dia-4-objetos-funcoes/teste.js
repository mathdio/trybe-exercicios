let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

for (let morador in moradores.blocoUm) {
  console.log(moradores.blocoUm[morador].nome + ' ' + moradores.blocoUm[morador].sobrenome);
}

for (let morador in moradores.blocoDois) {
  console.log(moradores.blocoDois[morador].nome + ' ' + moradores.blocoDois[morador].sobrenome);
}

// for (let i = 0; i < moradores.blocoUm.length; i += 1) {
//   console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
// }