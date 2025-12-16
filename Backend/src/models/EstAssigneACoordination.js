const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneACoordination = sequelize.define("EstAssigneACoordination", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_coordination",
  timestamps: false
});

module.exports = EstAssigneACoordination;
