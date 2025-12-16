const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneABAC = sequelize.define("EstAssigneABAC", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_bac: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_bac",
  timestamps: false
});

module.exports = EstAssigneABAC;
