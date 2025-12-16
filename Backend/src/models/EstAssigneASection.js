const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EstAssigneASection = sequelize.define("EstAssigneASection", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  id_section: { type: DataTypes.INTEGER, primaryKey: true }
}, {
  tableName: "est_assigne_a_section",
  timestamps: false
});

module.exports = EstAssigneASection;
