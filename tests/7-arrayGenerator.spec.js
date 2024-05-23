const arrayGenerator = require('../src/7-arrayGenerator');

describe('Testes da função `arrayGenerator`', () => {
  it('A função `arrayGenerator` transforma corretamente um objeto em array', () => {
    const objectMock = {a: 1, b: 2, c: 3};
    const objectMockKeys = Object.keys(objectMock);
    const objectMockValues = Object.values(objectMock);
    const objectMockEntries = Object.entries(objectMock);

    expect(arrayGenerator('keys', objectMock)).toEqual(objectMockKeys);
    expect(arrayGenerator('values', objectMock)).toEqual(objectMockValues);
    expect(arrayGenerator('entries', objectMock)).toEqual(objectMockEntries);
  });
});