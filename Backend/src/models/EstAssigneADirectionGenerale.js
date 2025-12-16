const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneADirectionGenerale = sequelize.define("EstAssigneADirectionGenerale", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_direction_generale: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_direction_generale",
  timestamps: false
});

module.exports = EstAssigneADirectionGenerale;
