const searchEmployee = require('./searchemployee.js')

describe('tests the function searchEmployee', () => {
  it('tests if searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('tests if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toEqual('function');
  });

  it('tests if searchEmployee returns ID and detail values', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual('ID: 4678-2, specialities: Backend');
    expect(searchEmployee('4456-4', 'lastName')).toEqual('ID: 4456-4, lastName: Zuckerberg');
  });

  it('tests if receives wrong id and returns error', () => {
    expect(() => {
      searchEmployee('000', 'lastName')
    }).toThrow('ID não identificada');
  });

  it('tests if receives undefined detail and returns error', () => {
    expect(() => {
      searchEmployee('4456-4', 'age')
    }).toThrow('Informação indisponível');
  });
});