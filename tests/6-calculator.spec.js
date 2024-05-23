const calculator = require('../src/6-calculator');

describe('Testes da função `calculator`', () => {
  it('Verifica se a função `calculator` retorna um objeto com múltiplas operações entre os dois parâmetros de entrada', () => {
    const functionMock = calculator(4, 2);

    // Proriedade de soma:
    expect(functionMock).toHaveProperty('sum', 6);

    // Propriedade de multiplicação:
    expect(functionMock).toHaveProperty('mult', 8);

    // Propriedade de divisão:
    expect(functionMock).toHaveProperty('div', 2);

    // Propriedade de subtração:
    expect(functionMock).toHaveProperty('sub', 2);
  });
});
