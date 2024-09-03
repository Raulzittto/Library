let proxId = 1;

const model = (body, id = proxId++) => {
  if (
    body.titulo != undefined &&
    body.titulo != "" &&
    body.autor != undefined &&
    body.autor != "" &&
    body.ano != undefined &&
    body.ano <= 2024 &&
    body.genero != undefined &&
    body.genero != ""
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      ano_lancamento: body.ano,
      genero: body.genero,
    };
  }
};

module.exports = model;
