/* eslint-disable max-len */
// Siga as orientações do README!
const createMenu = (object) => ({
  fetchMenu: () => ({
    food: object.food,
    drinks: object.drinks,
  }),
});

module.exports = createMenu;
