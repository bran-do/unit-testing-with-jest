/*
  A função `arrayGenerator` converte objetos em arrays: de chaves, valores ou ambos.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto para conversão;

  Comportamento (por exemplo, com as saídas da função `calculator`):
  arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ 3, 2, 0, -1 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]
*/

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }

  if (type === 'values') {
    return Object.values(object);
  }

  return Object.entries(object);
};

module.exports = arrayGenerator;
