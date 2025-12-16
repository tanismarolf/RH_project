const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const BAC = sequelize.define("bac", {
  id_bac: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  address: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "bac",
  timestamps: false
});

module.exports = BAC;
