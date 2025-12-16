const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Structure = sequelize.define("Structure", {
  id_structure: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "structure",
  timestamps: false
});

module.exports = Structure;
