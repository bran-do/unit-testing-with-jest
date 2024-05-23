const getCharacter = require('../src/8-getCharacter');

describe('Testes da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // A função retorna o objeto correto para o parâmetro 'Arya':
    expect(getCharacter('Arya').name).toBe('Arya Stark');

    // A função retorna o objeto correto para o parâmetro 'Brienne':
    expect(getCharacter('Brienne').name).toBe('Brienne Tarth');

    // A função retorna o objeto correto para o parâmetro 'Melissandre':
    expect(getCharacter('Melissandre').name).toBe('Melissandre');

    // O parâmetro não é case sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele:
    expect(getCharacter('aRyA')).toEqual(getCharacter('ArYa'));
  });

  it('Verifica se a função `getCharacter` retorna `undefined` para chamadas com o parâmetro vazio ou caso não encontren nenhum personagem', () => {
    // Chamada com parâmetro vazio:
    expect(getCharacter()).toBeUndefined();

    // Chamada com personagem inexistente:
    expect(getCharacter('Felipe')).toBeUndefined();
  });
});
