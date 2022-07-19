const myRemove = require('./myremove.js');

// 🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('tests the function myRemove', () => {
  it('verifies if array contains 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifies if array returns different', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('verifies if array returns equal', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});