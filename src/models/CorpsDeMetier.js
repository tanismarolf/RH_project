const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CorpsDeMetier = sequelize.define("CorpsDeMetier", {
  id_corps_de_metier: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  date_debut: { type: DataTypes.DATEONLY, allowNull: true },
  date_fin: { type: DataTypes.DATEONLY, allowNull: true }
}, {
  tableName: "corps_de_metier",
  timestamps: false
});

module.exports = CorpsDeMetier;
