const average = require('../src/1-average');

describe('Testes da função `average`', () => {
  it('Verifica se a função `average` retorna a média entre os números do array de entrada', () => {
    expect(average([1, 1])).toBe(1);
    expect(average([2, 4])).toBe(3);
    expect(average([10000, 20000, 30000])).toBe(20000);
  });

  it('Verifica se a função `average` retorna `undefined` caso o array de entrada possua elementos não-numéricos', () => {
    expect(average([1, '2'])).toBeUndefined();
    expect(average([1, 10, 100, true])).toBeUndefined();
  });
});
