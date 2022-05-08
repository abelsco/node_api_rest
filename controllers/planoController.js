const { Plano } = require("../models");

function findAll(req, res) {
  Plano.findAll()
    .then((planos) => {
      if (!planos)
        res.status(404).json({ mensagem: "Nenhum plano encontrado" });
      res.status(200).json(planos);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

function findPlano(req, res) {
  Plano.findByPk(req.params.id)
    .then((plano) => {
      if (!plano) res.status(404).json({ mensagem: "Plano não encontrado" });
      res.status(200).json(plano);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ mensagem: "Ocorreu um erro", erro: error.message });
    });
}

function addPlano(req, res) {
  Plano.create({
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

async function updatePlano(req, res) {
  await Plano.update(
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

  Plano.findByPk(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

async function deletePlano(req, res) {
  await Plano.destroy({
    where: {
      id: req.params.id,
    },
  });

  Plano.findAll({})
    .then((planos) => {
      if (!planos)
        res.status(404).json({ mensagem: "Nenhum plano encontrado" });
      res.status(200).json(planos);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

module.exports = {
  findAll,
  addPlano,
  findPlano,
  updatePlano,
  deletePlano,
};
