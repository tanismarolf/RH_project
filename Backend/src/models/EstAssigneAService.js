const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneAService = sequelize.define("EstAssigneAService", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_service: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_service",
  timestamps: false
});

module.exports = EstAssigneAService;
