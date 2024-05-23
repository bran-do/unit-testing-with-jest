const circle = require('../src/3-circle');

describe('Testes da função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // O retorno da função é um objeto:
    expect(typeof(circle(10))).toBe('object');
    
    // O objeto de retorno possui três chaves: 'radius', 'area' e 'circumference':
    const functionMock = circle(20);
    expect(functionMock).toHaveProperty('radius');
    expect(functionMock).toHaveProperty('area');
    expect(functionMock).toHaveProperty('circumference');
    
    // Os valores de 'area' e 'circumferences' foram calculados corretamente
    expect(circle(3).area).toEqual(28.259999999999998);
    expect(circle(2).circumference).toEqual(12.56);
  });
  
  it('Verifica se a função `circle` retorna `undefined` quando chamada sem nenhum parâmetro ou com parâmetro inválido', () => {
    expect(circle()).toBeUndefined();
    expect(circle('a')).toBeUndefined();
  })
});
