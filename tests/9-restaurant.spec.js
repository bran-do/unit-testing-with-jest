const createMenu = require('../src/9-restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    // 1. Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    expect(Object.keys(createMenu())[0]).toBe('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');

    // 2. Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()).length).toEqual(2);
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())[0]).toBe('food');
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())[1]).toBe('drinks');

    //  3. Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().

    // 5. Escreva um teste que verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    expect(Array.isArray(createMenu({ food: {}, drinks: {} }).consumption)).toBe(true);
    expect(createMenu({ food: {}, drinks: {} }).consumption.length).toEqual(0);
  });
});
