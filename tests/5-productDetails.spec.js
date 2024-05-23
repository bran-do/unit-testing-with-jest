const productDetails = require('../src/5-productDetails');

describe('Testes da função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // O retorno da função é um array:
    expect(Array.isArray(productDetails('arroz', 'feijao'))).toBe(true);

    // O array retornado pela função contém dois elementos:
    expect(productDetails('carne', 'massa').length).toEqual(2);

    // Os dois itens dentro do array retornado pela função são objetos:
    expect(typeof productDetails('farinha', 'sal')[0]).toBe('object');
    expect(typeof productDetails('farinha', 'sal')[1]).toBe('object');

    // Quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si:
    expect(productDetails('frango', 'batata')[0]).not.toMatchObject(productDetails('frango', 'batata')[1]);

    // Ambos ''productId's terminam com 123:
    const functionMock1 = productDetails('a', 'b')[0].details.productId;
    const functionMock2 = productDetails('a', 'b')[1].details.productId;
    expect(functionMock1).toMatch(/123/i);
    expect(functionMock2).toMatch(/123/i);
  });
});
