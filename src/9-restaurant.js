/*
  A função `createMenu` cria um cardápio baseado no objeto que é passado como parâmetro;
  Ela organiza esse cardápio num novo objeto incluindo um array para guardar os itens consumidos pelo cliente.

  Parâmetros:
    - Um objeto. Exemplo: { food: {lasagna: 29.90, fritas: 12.90}, drinks: {caipirinha: 9.90} };
  Comportamento:
    - createMenu({ food: {}, drinks: {} }) // Retorno: { fetchMenu: () => { food: {}, drinks: {} }, consumption: [] };
*/

const createMenu = (object) => ({
  fetchMenu: () => (object),
  consumption: [],
});

module.exports = createMenu;
