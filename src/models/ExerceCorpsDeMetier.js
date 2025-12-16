const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ExerceCorpsDeMetier = sequelize.define("ExerceCorpsDeMetier", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_corps_de_metier: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "exerce_corps_de_metier",
  timestamps: false
});

module.exports = ExerceCorpsDeMetier;
