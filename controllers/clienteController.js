const { Cliente } = require("../models");

function findAll(req, res) {
  Cliente.findAll()
    .then((clientes) => {
      if (!clientes)
        res.status(404).json({ mensagem: "Nenhum usuário encontrado" });
      res.status(200).json(clientes);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

function findCliente(req, res) {
  Cliente.findByPk(req.params.id)
    .then((cliente) => {
      if (!cliente)
        res.status(404).json({ mensagem: "Cliente não encontrado" });
      res.status(200).json(cliente);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ mensagem: "Ocorreu um erro", erro: error.message });
    });
}

function addCliente(req, res) {
  Cliente.create({
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

async function updateCliente(req, res) {
  await Cliente.update(
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

  Cliente.findByPk(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

async function deleteCliente(req, res) {
  await Cliente.destroy({
    where: {
      id: req.params.id,
    },
  });

  Cliente.findAll({})
    .then((clientes) => {
      if (!clientes)
        res.status(404).json({ mensagem: "Nenhum usuário encontrado" });
      res.status(200).json(clientes);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messagem: "Ocorreu um erro", erro: error.message });
    });
}

module.exports = {
  findAll,
  addCliente,
  findCliente,
  updateCliente,
  deleteCliente,
};
