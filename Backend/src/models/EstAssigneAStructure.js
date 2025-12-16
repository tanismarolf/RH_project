const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneAStructure = sequelize.define("EstAssigneAStructure", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_structure: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_structure",
  timestamps: false
});

module.exports = EstAssigneAStructure;
