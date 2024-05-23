const createStudent = require('../src/4-createStudent');

describe('Testes da função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna um objeto com as propriedades `name` e `feedback`', () => {
    const nameMock = 'Felipe';
    const feedbackMock = 'Essa é uma pessoa muito bacana!'
    const functionMock = createStudent(nameMock);

    // O parâmetro 'name' passa a conter o parâmetro de entrada:
    expect(functionMock).toHaveProperty('name', nameMock);

    // O parâmetro 'feedback' retorna uma frase 'Essa é uma pessoa muito bacana!':
    expect(functionMock).toHaveProperty('feedback', feedbackMock);
  });
});
