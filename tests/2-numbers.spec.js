const numbers = require('../src/2-numbers');

describe('Testes da função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    // Array inteiramente de números:
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);

    // Arrays com valores não-numéricos:
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
    expect(numbers([1, 'a', 3])).toBe(false);
    expect(numbers([' '])).toBe(false);
  });
});
