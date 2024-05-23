const arrayGenerator = require('../src/7-arrayGenerator');

describe('Testes da função `arrayGenerator`', () => {
  it('Verifica se a função `arrayGenerator` transforma corretamente um objeto em array', () => {
    const objectMock = {a: 1, b: 2, c: 3};
    const objectMockKeys = Object.keys(objectMock);
    const objectMockValues = Object.values(objectMock);
    const objectMockEntries = Object.entries(objectMock);

    // Quando o parâmetro é 'keys' retorna as chaves:
    expect(arrayGenerator('keys', objectMock)).toEqual(objectMockKeys);

    // Quando o parâmetro é 'values' retorna os valores:
    expect(arrayGenerator('values', objectMock)).toEqual(objectMockValues);

    // Quando o parâmetro é 'entries' retorna as entradas de chave-valor em array bidimensional:
    expect(arrayGenerator('entries', objectMock)).toEqual(objectMockEntries);
  });
});