const productDetails = require('../src/5-productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('arroz', 'feijao'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('carne', 'massa').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('farinha', 'sal')[0]).toBe('object');
    expect(typeof productDetails('farinha', 'sal')[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('frango', 'batata')[0]).not.toMatchObject(productDetails('frango', 'batata')[1]);
    // Teste se os dois productIds terminam com 123.
  //const pDetailsAB1 = productDetails('a', 'b');
    const firstPD = productDetails('a', 'b')[0].details.productId;
    const secondPD = productDetails('a', 'b')[1].details.productId;
    expect(firstPD.includes('123')).toBe(true);
    expect(secondPD.includes('123')).toBe(true);
  });
});
