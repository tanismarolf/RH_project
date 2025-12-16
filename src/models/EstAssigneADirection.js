const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneADirection = sequelize.define("EstAssigneADirection", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_direction: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_direction",
  timestamps: false
});

module.exports = EstAssigneADirection;
