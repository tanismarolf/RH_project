const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Contient = sequelize.define("contient", {
  id_direction: { type: DataTypes.INTEGER, primaryKey: true },
  id_service: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "contient",
  timestamps: false
});

module.exports = Contient;
