const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const NiveauEtude = sequelize.define("NiveauEtude", {
  id_niveau_etude: { type: DataTypes.INTEGER, primaryKey: true },
  niveau: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "niveau_etude",
  timestamps: false
});

module.exports = NiveauEtude;
