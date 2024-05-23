const createMenu = require('../src/9-restaurant');
 
describe('Testes da função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // A função retorna um objeto que possui a chave 'fetchMenu' e o valor dessa chave é uma função:
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');

    // O objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são 'food' e 'drinks':
    const menuMock = { food: {}, drinks: {} };
    expect(createMenu(menuMock).fetchMenu()).toHaveProperty('food');
    expect(createMenu(menuMock).fetchMenu()).toHaveProperty('drinks');

    //  O menu passado para a função é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu():
    expect(createMenu(menuMock).fetchMenu()).toEqual(menuMock);

    // A propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio:
    expect(createMenu(menuMock)).toHaveProperty('consumption', []);
  });
});
