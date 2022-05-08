const { Exame } = require("../models");

function findAll(req, res) {
  Exame.findAll()
    .then((exames) => {
      if (!exames)
        res.status(404).json({ mensagem: "Nenhum exame encontrado" });
      res.status(200).json(exames);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

function findExame(req, res) {
  Exame.findByPk(req.params.id)
    .then((exame) => {
      if (!exame) res.status(404).json({ mensagem: "Exame não encontrado" });
      res.status(200).json(exame);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ mensagem: "Ocorreu um erro", erro: error.message });
    });
}

function addExame(req, res) {
  Exame.create({
    id: req.body.id,
    nome: req.body.nome,
    cpf: req.body.cpf,
    dtNascimento: req.body.dtNascimento,
    nomeMae: req.body.nomeMae,
    endereco: req.body.endereco,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

async function updateExame(req, res) {
  await Exame.update(
    {
      nome: req.body.nome,
      cpf: req.body.cpf,
      dtNascimento: req.body.dtNascimento,
      nomeMae: req.body.nomeMae,
      endereco: req.body.endereco,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Exame.findByPk(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

async function deleteExame(req, res) {
  await Exame.destroy({
    where: {
      id: req.params.id,
    },
  });

  Exame.findAll({})
    .then((exames) => {
      if (!exames)
        res.status(404).json({ mensagem: "Nenhum exame encontrado" });
      res.status(200).json(exames);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

module.exports = {
  findAll,
  addExame,
  findExame,
  updateExame,
  deleteExame,
};
