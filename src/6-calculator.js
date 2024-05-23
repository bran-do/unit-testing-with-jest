/*
  A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.

  Cada uma dessas chaves corresponde a uma operação diferente:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.

  Obs: O resultado das divisões sempre serão arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }
*/

const calculator = (number1, number2) => ({
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2, 10),
    sub: number1 - number2,
});

module.exports = calculator;
