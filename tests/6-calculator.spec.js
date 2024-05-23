const calculator = require('../src/6-calculator');

describe('Testes da função `calculator`', () => {
  it('A função `calculator` retorna um objeto com múltiplas operações entre os dois parâmetros de entrada', () => {
    const functionMock = calculator(4, 2);

    expect(functionMock).toHaveProperty('sum', 6);
    expect(functionMock).toHaveProperty('mult', 8);
    expect(functionMock).toHaveProperty('div', 2);
    expect(functionMock).toHaveProperty('sub', 2);
  });
});
