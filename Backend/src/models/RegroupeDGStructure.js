const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const RegroupeDGStructure = sequelize.define("RegroupeDGStructure", {
  id_direction_generale: { type: DataTypes.INTEGER, primaryKey: true },
  id_structure: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "regroupe_dg_structure",
  timestamps: false
});

module.exports = RegroupeDGStructure;
