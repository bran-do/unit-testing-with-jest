const createStudent = require('../src/4-createStudent');

describe('Testes da função `createStudent`', () => {
    it('A função `createStudent` retorna um objeto com as propriedades `name` e `feedback`', () => {
        const nameMock = 'Felipe';
        const feedbackMock = 'Essa é uma pessoa muito bacana!'
        const functionMock = createStudent(nameMock);

        expect(functionMock).toHaveProperty('name', nameMock);
        expect(functionMock).toHaveProperty('feedback', feedbackMock);
    });
});
