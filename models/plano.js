"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plano.init(
    {
      nome: DataTypes.STRING,
      numCarteirinha: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Plano",
    }
  );

  Plano.associate = (models) => {
    Plano.belongsTo(models.Cliente, {
      foreignKey: "cliente_id",
      as: "plano_cliente",
    });
  };

  return Plano;
};
