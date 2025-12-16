const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Section = sequelize.define("Section", {
  id_section: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(50), allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: "section",
  timestamps: false
});

module.exports = Section;
