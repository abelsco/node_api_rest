"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init(
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dtNascimento: DataTypes.DATE,
      nomeMae: DataTypes.STRING,
      endereco: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cliente",
    }
  );

  Cliente.associate = (models) => {
    Cliente.hasOne(models.plano, {
      foreignKey: "cliente_id",
      as: "plano_cliente",
    });
  };

  Cliente.associate = (models) => {
    Cliente.hasMany(models.Exame, {
      foreignKey: "cliente_id",
      as: "exame_cliente",
    });
  };

  return Cliente;
};
