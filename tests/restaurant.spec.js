const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    // Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    expect(Object.keys(createMenu())[0]).toBe('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
});
    // 
