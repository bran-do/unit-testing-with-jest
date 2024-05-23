/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Essa é uma pessoa muito bacana!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
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
