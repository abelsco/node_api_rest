"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exame.init(
    {
      protocolo: DataTypes.INTEGER,
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Exame",
    }
  );

  Exame.associate = (models) => {
    Exame.belongsTo(models.Cliente, {
      foreignKey: "cliente_id",
      as: "exame_cliente",
    });
  };

  return Exame;
};
