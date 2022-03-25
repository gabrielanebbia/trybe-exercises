const searchEmployee = require('./exercicio_bonus');

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    expect(searchEmployee('8579-6', 'specialities')).toContain('UX', 'Design');
  });

  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('0000-0', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });

  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('8579-6', 'salary') }).toThrowError(new Error("Informação indisponível"));
  });
});
