let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.nome != undefined &&
    body.nome != "" &&
    body.matricula != undefined &&
    body.matricula == "ativa" ||
    body.matricula == "inativa" ||
    body.matricula == "finalizada" &&
    body.curso != undefined &&
    body.curso != "" &&
    body.ano != undefined &&
    body.ano <= 2024 &&
    ano > 1935
  ) {
    return {
      id,
      nome: body.nome,
      matricula: body.matricula,
      curso: body.curso,
      ano_de_matricula: body.ano,
    };
  }
};

module.exports = model;
