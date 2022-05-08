const express = require("express");
const clienteController = require("./controllers/clienteController");
const exameController = require("./controllers/exameController");
const planoController = require("./controllers/planoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ app: "Ola mundo" });
});

// ROUTES CLIENTE
routes.get("/clientes", clienteController.findAll);
routes.post("/clientes", clienteController.addCliente);
routes.get("/clientes/:id", clienteController.findCliente);
routes.put("/clientes/:id", clienteController.updateCliente);
routes.delete("/clientes/:id", clienteController.deleteCliente);

// ROUTES EXAMES
routes.get("/exames", exameController.findAll);
routes.post("/exames", exameController.addExame);
routes.get("/exames/:id", exameController.findExame);
routes.put("/exames/:id", exameController.updateExame);
routes.delete("/exames/:id", exameController.deleteExame);

// ROUTES PLANO
routes.get("/plano", planoController.findAll);
routes.post("/plano", planoController.addPlano);
routes.get("/plano/:id", planoController.findPlano);
routes.put("/plano/:id", planoController.updatePlano);
routes.delete("/plano/:id", planoController.deletePlano);

module.exports = routes;
