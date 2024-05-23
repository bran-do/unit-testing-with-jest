/*
  A função `createStudent` recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Essa é uma pessoa muito bacana!' ao ser chamada.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Felipe, o cara que está escrevendo testes')

    estudante.name // Retorna: 'Felipe, o cara que está escrevendo testes'
    estudante.feedback() // Retorna: 'Essa é uma pessoa muito bacana!'
*/

function feedbackFunction() {
  return 'Essa é uma pessoa muito bacana!';
}

const createStudent = (nome) => {
  const obj = {
    name: nome,
    feedback: feedbackFunction(),
  };
  return obj;
};

module.exports = createStudent;
