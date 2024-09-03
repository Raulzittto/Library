const livros_controller = require("../controllers/livros.js");
const estudante_controller = require("../controllers/estudante.js");

let proxId = 1;



const model = (body, id = proxId++) => {

  const data_aluguel = body.data_aluguel
.replaceAll("-", "")
.replaceAll("/", "")
.replaceAll(".", "")
.replaceAll(" ", "")

const data_devolucao = body.data_devolucao
.replaceAll("-", "")
.replaceAll("/", "")
.replaceAll(".", "")
.replaceAll(" ", "")

  if (
    livros_controller.show(body.livro_ID)&&
    estudante_controller.show(body.estudante_ID)&&
    data_aluguel != undefined &&
    data_aluguel.lenght >= 6 &&
    data_aluguel.lenght <= 8 &&
    devolucao != undefined &&
    devolucao.lenght >= 6 &&
    devolucao.lenght <= 8

  ) {
    return {
      id,
      livro_ID: body.livro_ID,
      estudante_ID: body.estudante_ID,
      data_aluguel: data_aluguel,
      data_devolucao: data_devolucao,
    };
  }
};

module.exports = model;
